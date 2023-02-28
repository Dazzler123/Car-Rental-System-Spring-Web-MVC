// loader
$(window).on('load', function () {
    $("#loader_Container").fadeOut(700);
});

// backend url
let baseURL = "http://localhost:8080/Back_End_war_exploded/";

let custId = "";
let custName = "";


//verify customer
$('#btnVerifyCustomer').click(function () {
    // get un pw
    let username = $('#txtCustomerUsername').val();
    let password = $('#pwdCustomerPassword').val();

    $.ajax({
        url: baseURL + "customer/verify",
        method: "get",
        data: {
            "username": username,
            "password": password
        },
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            //record id & name
            custId = resp.data.nic;
            custName = resp.data.name;

            //show name & nic
            $('#lblCustName').text(resp.data.name);
            $('#lblCustNIC').text(resp.data.nic);

            //show status
            $('#lblVerificationStatus').text("Verification Successful.");

            //disable input fields
            $('#txtCustomerUsername').attr('disabled', true);
            $('#pwdCustomerPassword').attr('disabled', true);

            //load all responses of this customer
            loadAllResponses();
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
            //show status
            $('#lblVerificationStatus').text("Verification Failed.");
        }
    });
});


function loadAllResponses() {
    $.ajax({
        url: baseURL + "rentalRequest/loadAll" + "",
        method: "get",
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            for (const c of resp.data) {
                //filter for this customer's responses
                if (!c.customerNic === custId) {
                    continue;
                } else {
                    var row = '<tr><td>' + c.requestId + '</td><td>' +
                        c.driverNic + '</td><td>' + c.date + '</td><td>' + c.time +
                        '</td><td>' +
                        c.pickUpDate + '</td><td>' + c.pickUpTime + '</td><td>' + c.returnDate +
                        '</td><td>' + c.returnTime + '</td><td>' + c.rentDuration + '</td><td>' + c.status + '</td><td>'
                        + c.reason + '</td></tr>';

                    //append to the table
                    $('#tblResponses').append(row);
                }
            }
            // getRowDataToFields();
        },
        error: function (err) {
            alert(err.responseText.message);
        }
    });
}
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
            getRowDataToLabels();
        },
        error: function (err) {
            alert(err.responseText.message);
        }
    });
}

function getRowDataToLabels() {
    $('#tblResponses > tr').click(function () {
        var driverId = $(this).children(":eq(1)").text();
        var status = $(this).children(":eq(9)").text();
        var reason = $(this).children(":eq(10)").text();

        //clear data
        $('#txtDenialReason').val("");

        // set text
        $('#lblStatus').text(status);

        if (status === "ACCEPTED") {
            $('#lblStatus').css('color', 'green');
            $('#lblStatusTwo').text("Your rental request has been verified and placed. Your assigned driver will\n" +
                "        contact you shortly. Please contact us for any inquiries. Thank you!");

        } else if (status === "DENIED") {
            $('#lblStatus').css('color', 'red');
            $('#lblStatusTwo').text("Your rental request has been denied and cancelled. Check the reason below for the" +
                "denial and place a rent again. Please contact us for any inquiries. Thank you!");
            $('#txtDenialReason').val(reason);

        } else {
            $('#lblStatus').css('color', 'grey');
            $('#lblStatusTwo').text("Your rental request has not been verified yet by our manager. " +
                "Please be patient to wait until it's been verified, it will process within 24hrs. " +
                "Please contact us for any inquiries. Thank you!");
        }

        //set driver details
        if (driverId === "SELF") {
        } else {
            loadDriverDetails(driverId);
        }
    });
}

function loadDriverDetails(id) {
    //request for details
    $.ajax({
        url: baseURL + "driver/search?nic=" + id + "",
        method: "get",
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            var driver = resp.data;
            //set data
            $('#lblDriverName').val(driver.name);
            $('#lblDriverContactNo').val(driver.contactNo);
        },
        error: function (err) {
            alert(err.responseText.message);
        }
    });
}

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
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
            //show status
            $('#lblVerificationStatus').text("Verification Failed.");
        }
    });
});
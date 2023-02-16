// backend url
let baseURL = "http://localhost:8080/Back_End_war_exploded/";

// loader
$(window).on('load', function () {
    $("#loader_Container").fadeOut(700);
});

// save customer details (Customer Registration form model)
$('#btnSaveCustomer').click(function () {
    //send ajax request to the customer servlet
    $.ajax({
        url: baseURL + "customer/register",
        method: "post",
        data: {
            "nic": $('#txtCustomerNIC').val(),
            "dl_no": $('#txtCustomerDLNo').val(),
            "name": $('#txtCustomerName').val(),
            "address": $('#txtCustomerAddress').val(),
            "contact_no": $('#txtCustomerContactNo').val(),
            "email": $('#txtCustomerEmail').val(),
            "nic_img": true,
            "dl_img": true,
            "gender": $('#cbxCustomerGender option:selected').text(),
            "username": $('#txtCustomerUsername').val(),
            "password": $('#pwdCustomerPassword').val()
        },

        dataType: "json",
        success: function (res) {
            alert(res.message);
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });

    //login user (set username)

});
// backend url
let baseURL = "http://localhost:8080/Back_End_war_exploded/";


// save customer details (Customer Registration form model)
$('#btnSaveCustomer').click(function () {
    //send ajax request to the customer servlet
    $.ajax({
        url: baseURL + "customer",
        method: "post",
        data: {
            "nic": $("#txtCustomerNIC").val(),
            "name": $("#txtCustomerName").val(),
            "address": $("#txtCustomerAddress").val(),
            "contact_no": $("#txtCustomerContactNo").val(),
            "email": $("#txtCustomerEmail").val(),
            "nic_img": true,
            "dl_img": true,
            "gender": $("#cbxCustomerGender").getSelection().val(),
            "dl_no": $("#txtCustomerDLNo").val(),
        },

        dataType: "json",
        success: function (res) {
            alert(res.message);
        },

        error: function (error) {
            var jsObject = JSON.parse(error.responseText);
            alert(jsObject.message);
        }
    });
});
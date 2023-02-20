// loader
$(window).on('load', function () {
    $("#loader_Container").fadeOut(700);
});

// backend url
let baseURL = "http://localhost:8080/Back_End_war_exploded/";


//search customer by nic
$('#btnSearchCustomer').click(function () {
    //get nic
    var nic = $('#txtSearchCustomerNIC').val();

    $.ajax({
        url: baseURL + "customer/verify",
        method: "get",
        dataType: "json",
        success: function (resp) {

        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});
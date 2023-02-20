// loader
$(window).on('load', function () {
    $("#loader_Container").fadeOut(700);
});

// backend url
let baseURL = "http://localhost:8080/Back_End_war_exploded/";


//search customer by nic
$('#btnSearchCustomer').click(function () {
    //refresh table
    $('#tblCustomers').empty();

    //get nic
    var nic = $('#txtSearchCustomerNIC').val();

    $.ajax({
        url: baseURL + "customer/search?nic=" + nic + "",
        method: "get",
        dataType: "json",
        success: function (resp) {
            var c = resp.data;
            var row = '<tr><td>' + c.nic + '</td><td>' + c.dl_no + '</td><td>' +
                c.name + '</td><td>' + c.address + '<td/><td>' +
                c.contact_no + '</td><td>' + c.email + '</td><td>' +
                c.gender + '</td></tr>';
            //append to the table
            $('#tblCustomers').append(row);
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});
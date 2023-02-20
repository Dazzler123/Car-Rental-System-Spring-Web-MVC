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
                c.name + '</td><td>' + c.address + '</td><td>' + c.contact_no + '</td><td>' + c.email + '</td><td>' +
                c.gender + '</td></tr>';

            //append to the table
            $('#tblCustomers').append(row);

            getRowDataToFields();
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});


//get table row data
function getRowDataToFields() {
    $('#tblCustomers > tr').click(function () {
        var custNic = $(this).children(":eq(0)").text();
        var custDlNo = $(this).children(":eq(1)").text();
        var custName = $(this).children(":eq(2)").text();
        var custAddress = $(this).children(":eq(3)").text();
        var custContactNo = $(this).children(":eq(4)").text();
        var custEmail = $(this).children(":eq(5)").text();
        var custGender = $(this).children(":eq(6)").text();

        // set text
        setTextFieldData(custNic,custEmail,custGender,custDlNo,custAddress,custContactNo,custName);
    });
}

function setTextFieldData(custNic,custEmail,custGender,custDlNo,custAddress,custContactNo,custName) {
    $('#lblCustNic').val(custNic);
    $('#txtCustomerName').val(custName);
    $('#txtCustomerAddress').val(custAddress);
    $('#txtCustomerDLNo').val(custDlNo);
    $('#txtCustomerEmail').val(custEmail);
    $('#txtCustomerContactNo').val(custContactNo);
    $('#cbxCustomerGender').val(custGender);
}

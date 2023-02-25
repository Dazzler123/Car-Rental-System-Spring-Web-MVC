// loader
$(window).on('load', function () {
    $("#loader_Container").fadeOut(700);
});

// backend url
let baseURL = "http://localhost:8080/Back_End_war_exploded/";


//customer nic
let nic = "";


//search customer by nic
$('#btnSearchCustomer').click(function () {
    //refresh table
    $('#tblCustomers').empty();

    //remove images
    document.querySelector("#nicDlImage").removeAttribute('src');

    // clear textfields
    setTextFieldData(null, null, null, null, null, null, null);

    //get nic
    nic = $('#txtSearchCustomerNIC').val();

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
})


//set nic-dl image
function loadNicDlImage() {
    // Get data URL from localStorage
    const url = localStorage.getItem(nic);

    //set image
    const img = document.querySelector("#nicDlImage");
    img.src = url;
    img.setAttribute("height","400px");
}

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
        setTextFieldData(custNic, custEmail, custGender, custDlNo, custAddress, custContactNo, custName);

        //set image
        loadNicDlImage();
    });
}


function setTextFieldData(custNic, custEmail, custGender, custDlNo, custAddress, custContactNo, custName) {
    $('#lblCustNic').val(custNic);
    $('#txtCustomerNIC').val(custNic);
    $('#txtCustomerName').val(custName);
    $('#txtCustomerAddress').val(custAddress);
    $('#txtCustomerDLNo').val(custDlNo);
    $('#txtCustomerEmail').val(custEmail);
    $('#txtCustomerContactNo').val(custContactNo);
    $('#cbxCustomerGender option:selected').text(custGender);
}


//update customer
// $('#btnUpdateCustomer').click(function () {
//     //save updates
//     $.ajax({
//         url: baseURL + "customer",
//         method: "put",
//         dataType: "application/json",
//         data: {
//             "nic":$('#lblCustNic').val(),
//             "dl_no":$('#txtCustomerDLNo').val(),
//             "name":$('#txtCustomerName').val(),
//             "address":$('#txtCustomerAddress').val(),
//             "contact_no":$('#txtCustomerContactNo').val(),
//             "email":$('#txtCustomerEmail').val(),
//             "gender":$('#cbxCustomerGender option:selected').text(),
//         },
//         success: function (resp) {
//             alert(JSON.parse(resp.responseText).message);
//
//             //refresh table
//             $('#tblCustomers').empty();
//
//             // clear textfields
//             setTextFieldData(null,null,null,null,null,null,null);
//         },
//         error: function (error) {
//             alert(JSON.parse(error.responseText).message);
//         }
//     });
// });


//delete customer
$('#btnDeleteCustomer').click(function () {
    //delete from db
    $.ajax({
        url: baseURL + "customer?nic=" + nic + "",
        method: "delete",
        dataType: "json",
        success: function (resp) {
            alert(JSON.parse(resp.responseText).message);
            alert("Customer deleted successfully.");

            //refresh table
            $('#tblCustomers').empty();

            // clear textfields
            setTextFieldData(null, null, null, null, null, null, null);
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });

    //delete nic-dl image from localStorage
    localStorage.removeItem(nic);

    //reset nic
    nic = "";
});

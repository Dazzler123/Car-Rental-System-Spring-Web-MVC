// backend url
let baseURL = "http://localhost:8080/Back_End_war_exploded/";

//file reader obj
const reader = new FileReader();

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


    //====== save nic/dl image on local storage (web) ========
    const nicDlImageFile = document.getElementById('nicDlImageFile');

    //save image
    // nicDlImageFile.addEventListener('change', () => {
    // Get file from input element
    const imgFile = nicDlImageFile.files[0];
    reader.readAsDataURL(imgFile);

    reader.addEventListener('load', () => {
        const url = reader.result
        // add image to localStorage
        localStorage.setItem($('#txtCustomerNIC').val(), url);
        // reader.abort();
    });
    // });
});
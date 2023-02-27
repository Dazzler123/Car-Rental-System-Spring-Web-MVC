// loader
$(window).on('load', function () {
    $("#loader_Container").fadeOut(700);
});

// backend url
let baseURL = "http://localhost:8080/Back_End_war_exploded/";


//load all rental requests to the table
loadAllRentalRequests();

//request id
let requestID = "";


function loadAllRentalRequests() {
    $.ajax({
        url: baseURL + "rentalRequest/loadAll" + "",
        method: "get",
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            for (const c of resp.data) {
                var row = '<tr><td>' + c.requestId + '</td><td>' + c.customerNic + '</td><td>' +
                    c.registrationNo + '</td><td>' + c.driverNic + '</td><td>' + c.date + '</td><td>' + c.time +
                    '</td><td>' +
                    c.pickUpDate + '</td><td>' + c.pickUpTime + '</td><td>' + c.returnDate +
                    '</td><td>' + c.returnTime + '</td><td>' + c.rentDuration + '</td></tr>';

                //append to the table
                $('#tblRequests').append(row);
            }
            getRowDataToFields();
        },
        error: function (err) {
            alert(err.responseText.message);
        }
    });
}

//get table row data
function getRowDataToFields() {
    $('#tblRequests > tr').click(function () {
        var reqId = $(this).children(":eq(0)").text();
        var customerId = $(this).children(":eq(1)").text();
        var vehicleId = $(this).children(":eq(2)").text();
        var driverId = $(this).children(":eq(3)").text();
        var date = $(this).children(":eq(4)").text();
        var time = $(this).children(":eq(5)").text();
        var pickupDate = $(this).children(":eq(6)").text();
        var pickupTime = $(this).children(":eq(7)").text();
        var returnDate = $(this).children(":eq(8)").text();
        var returnTime = $(this).children(":eq(9)").text();
        var rentDuration = $(this).children(":eq(10)").text();

        // set text
        setTextFieldData(reqId, customerId, vehicleId, driverId, date, time, pickupDate, pickupTime, returnDate,
            returnTime, rentDuration);

        //set image
        // loadNicDlImage();
    });
}


function setTextFieldData(reqId, customerId, vehicleId, driverId, date, time, pickupDate, pickupTime, returnDate,
                          returnTime, rentDuration) {
    requestID = reqId;

    //load customer & driver
    loadCustomerDetails(customerId);
    loadDriverDetails(driverId);

    // $('#txtCustomerNIC').val(custNic);
    // $('#txtCustomerName').val(custName);
    // $('#txtCustomerAddress').val(custAddress);
    // $('#txtCustomerDLNo').val(custDlNo);
    // $('#txtCustomerEmail').val(custEmail);
    // $('#txtCustomerContactNo').val(custContactNo);
    // $('#cbxCustomerGender option:selected').text(custGender);
}

function loadCustomerDetails(id) {
    $.ajax({
        url: baseURL + "customer/search?nic=" + id + "",
        method: "get",
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            var customer = resp.data;
            //set data
            $('#lblCustomerNIC').val(customer.nic);
            $('#lblCustomerDLNo').val(customer.dl_no);
            $('#lblCustomerName').val(customer.name);
            $('#lblCustomerAddress').val(customer.address);
            $('#lblCustomerContactNo').val(customer.contact_no);
            $('#lblCustomerEmail').val(customer.email);
            $('#lblCustomerGender').val(customer.gender);

            //load nic/dl image
            // Get data URL from localStorage
            const url = localStorage.getItem(customer.nic);

            //set image
            const img = document.querySelector("#nicDlImg");
            img.src = url;
        },
        error: function (err) {
            alert(err.responseText.message);
        }
    });
}

function loadDriverDetails(id) {
    $.ajax({
        url: baseURL + "driver/search?nic=" + id + "",
        method: "get",
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            var driver = resp.data;
            //set data
            $('#lblDriverNIC').val(driver.nic);
            $('#lblDriverDLNo').val(driver.dlNo);
            $('#lblDriverName').val(driver.name);
            $('#lblDriverAddress').val(driver.address);
            $('#lblDriverContactNo').val(driver.contactNo);

            //load nic/dl image
            // Get data URL from localStorage
            const url = localStorage.getItem(driver.nic);

            //set image
            const img = document.querySelector("#driverNicDlImg");
            img.src = url;
        },
        error: function (err) {
            alert(err.responseText.message);
        }
    });
}
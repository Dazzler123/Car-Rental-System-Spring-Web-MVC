// backend url
let baseURL = "http://localhost:8080/Back_End_war_exploded/";

let driver;

$('#btnSearchDriver').click(function () {
    var id = $('#txtSearchNIC').val();
    //request if exists
    $.ajax({
        url: baseURL + "driver/exists?nic=" + id + "",
        method: "get",
        async: false,
        dataType: "json",
        success: function (resp) {
            if (resp) {
                //set driver
                driver = id;

                //load his/her rentals
                loadRentals();
            } else {
                alert("Incorrect NIC! No matching driver found.")
            }
        },
        error: function (err) {
            alert(err.message);
        }
    });
});


function loadRentals() {
    //clear table
    $('#tblRentals').empty();

    //request for rentals
    $.ajax({
        url: baseURL + "rentalRequest/loadAll" + "",
        method: "get",
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            for (const c of resp.data) {
                if (c.driverNic === driver && c.status === "ACCEPTED") {
                    var row = '<tr><td>' + c.customerNic + '</td><td>' + c.registrationNo + '</td><td>' +
                        c.date + '</td><td>' + c.time + '</td><td>' +
                        c.pickUpDate + '</td><td>' + c.pickUpTime + '</td><td>' + c.returnDate +
                        '</td><td>' + c.returnTime + '</td><td>' + c.rentDuration + '</td></tr>';

                    //append to the table
                    $('#tblRentals').append(row);
                } else {
                    alert("No accepted rentals for you yet.")
                }
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
    $('#tblRentals > tr').click(function () {
        var customerId = $(this).children(":eq(0)").text();
        var vehicleId = $(this).children(":eq(1)").text();
        var date = $(this).children(":eq(2)").text();
        var time = $(this).children(":eq(3)").text();
        var pickupDate = $(this).children(":eq(4)").text();
        var pickupTime = $(this).children(":eq(5)").text();
        var returnDate = $(this).children(":eq(6)").text();
        var returnTime = $(this).children(":eq(7)").text();
        var rentDuration = $(this).children(":eq(8)").text();

        // set text
        setTextFieldData(customerId, vehicleId, date, time, pickupDate, pickupTime, returnDate,
            returnTime, rentDuration);
    });
}

function setTextFieldData(customerId, vehicleId, date, time, pickupDate, pickupTime, returnDate,
                          returnTime, rentDuration) {

    //set data
    $('#lblPickUpDate').val(pickupDate);
    $('#lblPickUpTime').val(pickupTime);
    $('#lblReturnDate').val(returnDate);
    $('#lblReturnTime').val(returnTime);
    $('#lblRentDuration').val(rentDuration);

    //load customer & driver
    loadCustomerDetails(customerId);
    loadVehicleDetails(vehicleId);


    //set customer contact call number link
    // $('#btnContactCustomer').setAttribute('href','')
}


function loadCustomerDetails(id) {
    $.ajax({
        url: baseURL + "customer/search?nic=" + id + "",
        method: "get",
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            var c = resp.data;
            //set data
            $('#lblCustomerNIC').val(c.nic);
            $('#lblCustomerDLNo').val(c.dl_no);
            $('#lblCustomerName').val(c.name);
            $('#lblCustomerAddress').val(c.address);
            $('#lblCustomerContactNo').val(c.contact_no);
            $('#lblCustomerEmail').val(c.email);
            $('#lblCustomerGender').val(c.gender);
        },
        error: function (err) {
            alert(err.responseText.message);
        }
    });
}


function loadVehicleDetails(id) {
    $.ajax({
        url: baseURL + "vehicle/search?registrationNo=" + id + "",
        method: "get",
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            var v = resp.data;
            //set data
            $('#lblRegistrationNo').val(v.registrationNo);
            $('#lblMake').val(v.make);
            $('#lblModel').val(v.model);
            $('#lblYOM').val(v.yom);
        },
        error: function (err) {
            alert(err.responseText.message);
        }
    });
}

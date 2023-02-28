// backend url
let baseURL = "http://localhost:8080/Back_End_war_exploded/";


//ids
let rentID;
let driverID;
let vehicleID;


$('#btnSearchRent').click(function () {
    //get request details
    $.ajax({
        url: baseURL + "rentalRequest/search?requestId=" + $('#txtRentID').val() + "",
        method: "get",
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            var request = resp.data;

            rentID = request.requestId;

            //set data
            $('#lblPickUpDate').val(request.pickUpDate);
            $('#lblPickUpTime').val(request.pickUpTime);
            $('#lblReturnDate').val(request.returnDate);
            $('#lblReturnTime').val(request.returnTime);
            $('#lblRentDuration').val(request.rentDuration);

            //load bank slip image
            // Get data URL from localStorage
            const url = localStorage.getItem(request.customerNic + request.driverNic + request.returnDate +
                request.returnTime + request.registrationNo);

            //set image
            const img = document.querySelector("#bankSlipImage");
            img.src = url;

            //load customer details
            loadCustomerDetails(request.customerNic);

            //load driver details
            loadDriverDetails(request.driverNic);

            //load vehicle details
            loadVehicleDetails(request.registrationNo);
        },
        error: function (err) {
            alert("Incorrect Rent ID! Rent details not found.");
        }
    });
});


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
            $('#lblCustomerName').val(customer.name);
        },
        error: function (err) {
            alert(err.responseText.message);
        }
    });
}


function loadDriverDetails(id) {
    if (id == "SELF") {
        //set text
        $('#lblDriverNIC').val("SELF");
        $('#lblDriverDLNo').val("SELF");
        $('#lblDriverName').val("SELF");
    } else {
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

                //record driver
                driverID = driver.nic;
            },
            error: function (err) {
                alert(err.responseText.message);
            }
        });
    }
}


function loadVehicleDetails(id) {
    $.ajax({
        url: baseURL + "vehicle/search?registrationNo=" + id + "",
        method: "get",
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            var vehicle = resp.data;
            //set data
            $('#lblRegistrationNo').val(vehicle.registrationNo);
            $('#lblMake').val(vehicle.make);
            $('#lblModel').val(vehicle.model);
            $('#lblYOM').val(vehicle.yom);
            $('#lblDailyRate').val(vehicle.dailyRate);
            $('#lblKmDaily').val(vehicle.kmDaily);
            $('#lblMonthlyRate').val(vehicle.monthlyRate);
            $('#lblKmMonthly').val(vehicle.kmMonthly);
            $('#lblExtraKmRate').val(vehicle.extraKmRate);

            //record vehicle
            vehicleID = vehicle.registrationNo;
        },
        error: function (err) {
            alert(err.responseText.message);
        }
    });
}
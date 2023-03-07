// backend url
let baseURL = "http://localhost:8080/Back_End_war_exploded/";

var date = new Date();

//ids
let rentID;
let driverID;
let vehicleID;
let rentDurationCount;
let rentDurationValue;
let extraKmRate;
let vehicleType;
let lossDamageAmount;
let grandTotal = 0;


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
            driverID = request.driverNic;
            rentDurationCount = request.rentDuration;
            rentDurationCount++;

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

            setDriverCharges();
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
            extraKmRate = vehicle.extraKmRate;
            vehicleType = vehicle.type;

            //record vehicle
            vehicleID = vehicle.registrationNo;

            //calculate amount for rent duration days
            calculateAmountForRentalDurationCount(vehicle.dailyRate, vehicle.monthlyRate)
        },
        error: function (err) {
            alert(err.responseText.message);
        }
    });
}


function calculateAmountForRentalDurationCount(dailyAmount, monthlyAmount) {
    var tempAmount = 0;
    // if rented days count is more than or equal to a month
    if (rentDurationCount >= 30) {
        tempAmount = rentDurationCount * monthlyAmount;
        $('#lblTotRentAmount').text(tempAmount + "/=");
    } else {
        tempAmount = rentDurationCount * dailyAmount;
        $('#lblTotRentAmount').text(tempAmount + "/=");
    }
    rentDurationValue = tempAmount;
}


function setDriverCharges() {
    if (driverID == "SELF") {
        $('#lblDriverCharge').text("SELF");
    } else {
        $('#lblDriverCharge').text(1000 + "/=");
    }
}


$('#btnCalculateRentTotal').click(function () {
    var extraKmValue = extraKmRate * $('#txtExtraKmCount').val();
    //set total
    if (driverID == "SELF") {
        setGrandTotal(extraKmValue + rentDurationValue);
        grandTotal = extraKmValue + rentDurationValue;
    } else {
        setGrandTotal(extraKmValue + rentDurationValue + 1000);
        grandTotal = extraKmValue + rentDurationValue + 1000;
    }
});


function setGrandTotal(val) {
    $('#lblGrandTotal').text(val + "/=")
}


$('#txtLossDamageAmount').change(function () {
    var tempVal = $('#txtLossDamageAmount').val();

    if (vehicleType === "General Car") {
        lossDamageAmount = 10000;
    } else if (vehicleType === "Premium Car") {
        lossDamageAmount = 15000;
    } else if (vehicleType === "Luxury Car") {
        lossDamageAmount = 20000;
    }

    //set total and balance
    $('#lblLossDamageAmount').text(lossDamageAmount + "/=");
    $('#lblLossDamageBalance').text(lossDamageAmount - tempVal + "/=");
});


$('#btnSaveRent').click(function () {
    let info;

    //get request details
    $.ajax({
        url: baseURL + "rentalRequest/search?requestId=" + rentID + "",
        method: "get",
        async: false,
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            info = resp.data;
        },
        error: function (err) {
            alert("Something went wrong.");
        }
    });

    //save rent
    $.ajax({
        url: baseURL + "rentRecords",
        method: "post",
        data: {
            "id": 0,
            "customerNic": info.customerNic,
            "registrationNo": info.registrationNo,
            "driverNic": info.driverNic,
            "date": date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
            "time": date.getHours() + ":" + date.getMinutes(),
            "pickUpDate": info.pickUpDate,
            "pickUpTime": info.pickUpTime,
            "bankImgKey": info.bankImgKey,
            "returnDate": info.returnDate,
            "returnTime": info.returnTime,
            "rentDuration": info.rentDuration,
            "extraKmDriven": $('#txtExtraKmCount').val(),
            "totalCharge": grandTotal,
            "damageWaiver": $('#txtLossDamageAmount').val(),
        },
        dataType: "json",
        success: function (resp) {
            alert("Rental information recorded successfully.")

            //remove rental from request table
            deleteRentalRequest();

            //set driver as available
            setDriverAsAvailable(driverID);

            //set vehicle as available
            setVehicleAsAvailable();
        },
        error: function (err) {
            alert(err.responseText.message);
        }
    });
});


function deleteRentalRequest() {
    //delete request
    $.ajax({
        url: baseURL + "rentalRequest?requestId=" + rentID + "",
        method: "delete",
        async: false,
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            console.log("Request deleted from requests list.")
        },
        error: function (err) {
            alert("Something went wrong.");
        }
    });
}


function setDriverAsAvailable(id) {
    let change;

    //get driver
    $.ajax({
        url: baseURL + "driver/search?nic=" + id + "",
        method: "get",
        async: false,
        dataType: "json",
        success: function (resp) {
            change = resp.data;
            change.occupied = false;
        },
        error: function (error) {
            alert(error.message);
        }
    });

    //update (save) driver occupied as true
    $.ajax({
        url: baseURL + "driver",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(change),
        dataType: "json",
        success: function (resp) {
            console.log(resp.message);
        },
        error: function (error) {
            alert(error.message);
        }
    });
}


function setVehicleAsAvailable() {
    let change;

    //get vehicle
    $.ajax({
        url: baseURL + "vehicle/search?registrationNo=" + vehicleID + "",
        method: "get",
        async: false,
        dataType: "json",
        success: function (resp) {
            change = resp.data;
            change.reserved = false;
        },
        error: function (error) {
            alert(error.message);
        }
    });

    //update (save) vehicle reserved as true
    $.ajax({
        url: baseURL + "vehicle",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(change),
        dataType: "json",
        success: function (resp) {
            console.log(resp.message);
        },
        error: function (error) {
            alert(error.message);
        }
    });
}


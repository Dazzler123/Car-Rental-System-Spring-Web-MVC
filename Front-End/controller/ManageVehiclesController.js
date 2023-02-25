// loader
$(window).on('load', function () {
    $("#loader_Container").fadeOut(700);
});

// backend url
let baseURL = "http://localhost:8080/Back_End_war_exploded/";

//vehicle registration no.
let regisNo = "";
let vehicleModel = "";


//search vehicles by registration no.
$('#btnSearchVehicle').click(function () {
    //refresh table
    $('#tblVehicles').empty();

    //clear images
    document.querySelector("#frontViewImage").removeAttribute('src');
    document.querySelector("#rearViewImage").removeAttribute('src');
    document.querySelector("#interiorViewImage").removeAttribute('src');

    // clear textfields
    setTextFieldData(null, null, null, null, null, null, null,
        null, null, null, null, null, null,
        null, null, null, null);

    vehicleModel = "";

    // get registration no.
    regisNo = $('#txtSearchRegistrationNo').val();

    //request
    $.ajax({
        url: baseURL + "vehicle/search?registrationNo=" + regisNo + "",
        method: "get",
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            var c = resp.data;

            //get reserved status
            if (c.reserved) {
                var isReserved = "YES"
            } else {
                isReserved = "NO"
            }

            var row = '<tr><td>' + c.registrationNo + '</td><td>' +
                c.make + '</td><td>' +
                c.model + '</td><td>' +
                c.yom + '</td><td>' +
                c.type + '</td><td>' +
                c.color + '</td><td>' +
                c.fuelType + '</td><td>' +
                c.passengers + '</td><td>' +
                c.transmission + '</td><td>' +
                c.mileage + '</td><td>' +
                c.dailyRate + '</td><td>' +
                c.monthlyRate + '</td><td>' +
                c.extraKmRate + '</td><td>' +
                c.kmDaily + '</td><td>' +
                c.kmMonthly + '</td><td>' +
                c.description + '</td><td>' +
                isReserved + '</td></tr>';

            //append to the table
            $('#tblVehicles').append(row);

            getRowDataToFields();
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});


//set vehicle images
function loadImages(model) {
    const frImg = document.querySelector("#frontViewImage");
    const rrImg = document.querySelector("#rearViewImage");
    const itrImg = document.querySelector("#interiorViewImage");

    // Get data URLs from localStorage
    const frImgUrl = localStorage.getItem(model + "1");
    const RrImgUrl = localStorage.getItem(model + "2");
    const ItrImgUrl = localStorage.getItem(model + "3");

    //set images
    frImg.setAttribute("height", "70px");
    frImg.src = frImgUrl;
    rrImg.setAttribute("height", "70px");
    rrImg.src = RrImgUrl;
    itrImg.setAttribute("height", "70px");
    itrImg.src = ItrImgUrl;
}


//get table row data
function getRowDataToFields() {
    $('#tblVehicles > tr').click(function () {
        var regisNo = $(this).children(":eq(0)").text();
        var make = $(this).children(":eq(1)").text();
        var model = $(this).children(":eq(2)").text();
        var yom = $(this).children(":eq(3)").text();
        var type = $(this).children(":eq(4)").text();
        var color = $(this).children(":eq(5)").text();
        var fuelType = $(this).children(":eq(6)").text();
        var passengers = $(this).children(":eq(7)").text();
        var transmission = $(this).children(":eq(8)").text();
        var mileage = $(this).children(":eq(9)").text();
        var dailyRate = $(this).children(":eq(10)").text();
        var monthlyRate = $(this).children(":eq(11)").text();
        var extraKmRate = $(this).children(":eq(12)").text();
        var kmDaily = $(this).children(":eq(13)").text();
        var kmMonthly = $(this).children(":eq(14)").text();
        var description = $(this).children(":eq(15)").text();
        var reserved = $(this).children(":eq(16)").text();

        // set text
        setTextFieldData(regisNo, make, model, yom, type, color, fuelType, passengers,
            transmission, mileage, dailyRate, monthlyRate, extraKmRate, kmDaily, kmMonthly, description, reserved);

        //load images of the car
        loadImages(model);

        //record model name
        vehicleModel = model;
    });
}


function setTextFieldData(regisNo, make, model, yom, type, color, fuelType, passengers,
                          transmission, mileage, dailyRate, monthlyRate, extraKmRate, kmDaily, kmMonthly,
                          description, reserved) {
    var resStatus;
    if (reserved == "YES") {
        resStatus = "Reserved";
    } else {
        resStatus = "Available"
    }

    $('#lblRegisNo').val(regisNo);
    $('#lblReservedStatus').val(resStatus);
    $('#txtMake').val(make);
    $('#txtModel').val(model);
    $('#txtYOM').val(yom);
    $('#txtType').val(type);
    $('#clrPicker').val(color);
    $('#cbxFuelType').append(fuelType);
    $('#txtPassengers').val(passengers);
    $('#txtTransmission').val(transmission);
    $('#txtMileage').val(mileage);
    $('#txtDailyRate').val(dailyRate);
    $('#txtMonthlyRate').val(monthlyRate);
    $('#txtExtraKmRate').val(extraKmRate);
    $('#txtDailyKm').val(kmDaily);
    $('#txtMonthlyKm').val(kmMonthly);
    $('#txtDescription').val(description);
}


$('#btnSaveVehicle').click(function () {
    // get data
    var regisNo = $('#txtRegistrationNo').val();
    var vehiMake = $('#txtMake').val();
    var vehiModel = $('#txtModel').val();
    var vehiYOM = $('#txtYOM').val();
    var vehiType = $('#txtType').val();
    var vehiColor = $('#clrPicker').val();
    var vehiFuelType = $('#cbxFuelType option:selected').text();
    var vehiPassengers = $('#txtPassengers').val();
    var vehiTransmission = $('#txtTransmission').val();
    var vehiMileage = $('#txtMileage').val();
    var vehiDailyRate = $('#txtDailyRate').val();
    var vehiMonthlyRate = $('#txtMonthlyRate').val();
    var vehiExtraKmRate = $('#txtExtraKmRate').val();
    var vehiDailyKm = $('#txtDailyKm').val();
    var vehiMonthlyKm = $('#txtMonthlyKm').val();
    var vehiDescription = $('#txtDescription').val();

    //save
    $.ajax({
        url: baseURL + "vehicle",
        method: "post",
        data: {
            "registrationNo": regisNo,
            "make": vehiMake,
            "model": vehiModel,
            "yom": vehiYOM,
            "type": vehiType,
            "fuelType": vehiFuelType,
            "color": vehiColor,
            "transmission": vehiTransmission,
            "mileage": vehiMileage,
            "passengers": vehiPassengers,
            "description": vehiDescription,
            "reserved": false,
            "dailyRate": vehiDailyRate,
            "kmDaily": vehiDailyKm,
            "monthlyRate": vehiMonthlyRate,
            "kmMonthly": vehiMonthlyKm,
            "extraKmRate": vehiExtraKmRate,
        },
        dataType: "json",
        success: function (res) {
            alert(res.message);
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});
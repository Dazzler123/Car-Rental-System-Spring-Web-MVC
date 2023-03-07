// backend url
let baseURL = "http://localhost:8080/Back_End_war_exploded/";


//load all vehicles on maintenance & defective one's to the table
loadAllVehiclesOnMaintenance();
loadAllDefectiveVehicles();


function loadAllVehiclesOnMaintenance() {
    //request
    $.ajax({
        url: baseURL + "maintenance" + "",
        method: "get",
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            for (const c of resp.data) {
                //search, get vehicle details and append to the table
                getVehicleDetails(c.vehicleId, "Maintenance");
            }
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
}

function loadAllDefectiveVehicles() {
    //request
    $.ajax({
        url: baseURL + "defective" + "",
        method: "get",
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            for (const c of resp.data) {
                //search, get vehicle details and append to the table
                getVehicleDetails(c.vehicleId, "Defective");
            }
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
}


function getVehicleDetails(id, table) {
    //request
    $.ajax({
        url: baseURL + "vehicle/search?registrationNo=" + id + "",
        method: "get",
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            var c = resp.data;

            var row = '<tr><td>' + c.registrationNo + '</td><td>' +
                c.make + '</td><td>' +
                c.model + '</td><td>' +
                c.yom + '</td><td>' +
                c.type + '</td><td>' +
                c.color + '</td><td>' +
                c.fuelType + '</td><td>' +
                c.passengers + '</td><td>' +
                c.transmission + '</td><td>' +
                c.mileage + '</td></tr>';

            //append to the relevant table
            if (table === "Maintenance") {
                $('#tblMaintenanceVehicles').append(row);
                //set table row data to labels
                getRowDataToFields("Maintenance");
            } else {
                $('#tblDefectiveVehicles').append(row);
                //set table row data to labels
                getRowDataToFields("Defective");
            }
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
}


//get table row data
function getRowDataToFields(table) {
    if (table === "Maintenance") {
        $('#tblMaintenanceVehicles > tr').click(function () {
            var regisNum = $(this).children(":eq(0)").text();
            var make = $(this).children(":eq(1)").text();
            var model = $(this).children(":eq(2)").text();
            var yom = $(this).children(":eq(3)").text();

            // set text
            setTextFieldData(regisNum, make, model, yom, "Maintenance");
        });
    } else {
        $('#tblDefectiveVehicles > tr').click(function () {
            var regisNum = $(this).children(":eq(0)").text();
            var make = $(this).children(":eq(1)").text();
            var model = $(this).children(":eq(2)").text();
            var yom = $(this).children(":eq(3)").text();

            // set text
            setTextFieldData(regisNum, make, model, yom, "Defective");
        });
    }
}


function setTextFieldData(regisNO, make, model, yom, list) {
    if (list === "Maintenance") {
        $('#lblRegistrationNo').val(regisNO);
        $('#lblMake').val(make);
        $('#lblModel').val(model);
        $('#lblYOM').val(yom);
    } else {
        $('#lblDefectiveRegistrationNo').val(regisNO);
        $('#lblDefectiveMake').val(make);
        $('#lblDefectiveModel').val(model);
        $('#lblDefectiveYOM').val(yom);
    }
}


function updateVehicleStatus(status) {
    let vehicle;
    //get vehicle
    $.ajax({
        url: baseURL + "vehicle/search?registrationNo=" + regisNo + "",
        method: "get",
        async: false,
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            vehicle = resp.data;
            vehicle.reserved = status;
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });

    //save updated status
    $.ajax({
        url: baseURL + "vehicle",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(vehicle),
        dataType: "json",
        success: function (res) {
            console.log(res.message);
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
}
// loader
$(window).on('load', function () {
    $("#loader_Container").fadeOut(700);
});

// backend url
let baseURL = "http://localhost:8080/Back_End_war_exploded/";

// load summary data
dashboardSummary();


function dashboardSummary() {
    getVehicleReservedStatusCount();
    getRegisteredCustomerCount();

    //search & set available/reserved drivers count
    let driverOccupiedStatus = getDriverOccupiedStatus()
    $('#lblAvailableDrivers').text(driverOccupiedStatus.nonOccupied);
    $('#lblOccupiedDrivers').text(driverOccupiedStatus.occupied);
}


function getVehicleReservedStatusCount() {
    let availableCars = 0;
    let reservedCars = 0;

    //request for all vehicles
    $.ajax({
        url: baseURL + "vehicle/loadAll",
        method: "get",
        dataType: "json",
        success: function (resp) {
            for (var vehicle of resp.data) {
                // if the car is reserved
                if (vehicle.reserved) {
                    reservedCars = reservedCars + 1;
                } else {
                    availableCars = availableCars + 1;
                }
            }
            //set data
            $('#lblAvailableCars').text(availableCars);
            $('#lblReservedCars').text(reservedCars);
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
}

function getRegisteredCustomerCount() {
    //request for all customers
    $.ajax({
        url: baseURL + "customer/loadAll",
        method: "get",
        dataType: "json",
        success: function (resp) {
            //set data
            $('#lblTotCustomers').text(resp.data.length);
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
}

function getDriverOccupiedStatus() {
    var occupiedCount = 0;
    var nonOccupiedCount = 0;

    //available count
    $.ajax({
        url: baseURL + "driver?occupied=" + false + "",
        method: "get",
        async: false,
        dataType: "json",
        success: function (resp) {
            for (const respElement of resp.data) {
                nonOccupiedCount = nonOccupiedCount + 1;
            }
        },
        error: function (error) {
            alert(error.message);
        }
    });

    //reserved count
    $.ajax({
        url: baseURL + "driver?occupied=" + true + "",
        method: "get",
        async: false,
        dataType: "json",
        success: function (resp) {
            for (const respElement of resp.data) {
                occupiedCount = occupiedCount + 1;
            }
        },
        error: function (error) {
            alert(error.message);
        }
    });

    return {
        "occupied": occupiedCount,
        "nonOccupied": nonOccupiedCount
    };
}
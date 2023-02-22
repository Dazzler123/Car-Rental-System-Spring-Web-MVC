// loader
$(window).on('load', function () {
    $("#loader_Container").fadeOut(700);
});

// backend url
let baseURL = "http://localhost:8080/Back_End_war_exploded/";

// load summary data
dashboardSummary();



function dashboardSummary() {
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
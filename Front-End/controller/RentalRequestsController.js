// loader
$(window).on('load', function () {
    $("#loader_Container").fadeOut(700);
});

// backend url
let baseURL = "http://localhost:8080/Back_End_war_exploded/";


//load all rental requests to the table
loadAllRentalRequests();


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
            // getRowDataToFields();
        },
        error: function (err) {
            alert(err.responseText.message);
        }
    });
}
// loader
$(window).on('load', function () {
    $("#loader_Container").fadeOut(700);
});

// backend url
let baseURL = "http://localhost:8080/Back_End_war_exploded/";

let isReserved;

//search vehicles by registration no.
$('#btnSearchVehicle').click(function () {
    isReserved = null;

    //refresh table
    $('#tblVehicles').empty();

    // get registration no.
    let regisNo = $('#txtSearchRegistrationNo').val();

    //request
    $.ajax({
        url: baseURL + "vehicle/search?registrationNo=" + regisNo + "",
        method: "get",
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            var c = resp.data;

            //get reserved status
            if(c.reserved) {
                isReserved = "YES"
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

            // getRowDataToFields();
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});
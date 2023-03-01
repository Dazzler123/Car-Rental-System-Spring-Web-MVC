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
    $.ajax({
        url: baseURL + "rentalRequest/loadAll" + "",
        method: "get",
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            for (const c of resp.data) {
                if (c.driverNic === driver && c.status === "ACCEPTED") {
                    var row = '<tr><td>' + c.date + '</td><td>' + c.time + '</td><td>' +
                        c.pickUpDate + '</td><td>' + c.pickUpTime + '</td><td>' + c.returnDate +
                        '</td><td>' + c.returnTime + '</td><td>' + c.rentDuration + '</td></tr>';

                    //append to the table
                    $('#tblRentals').append(row);
                } else {
                    alert("No accepted rentals for you yet.")
                }
            }
            // getRowDataToFields();
        },
        error: function (err) {
            alert(err.responseText.message);
        }
    });
}

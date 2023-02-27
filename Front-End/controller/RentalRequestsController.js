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
            console.log(resp)
        },
        error: function (err) {
            alert(err.responseText.message);
        }
    });
}
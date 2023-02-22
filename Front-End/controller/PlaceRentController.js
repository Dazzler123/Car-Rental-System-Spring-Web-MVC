// loader
$(window).on('load', function () {
    $("#loader_Container").fadeOut(700);
});

// backend url
let baseURL = "http://localhost:8080/Back_End_war_exploded/";

//load all vehicle models at startup
loadAllVehicleModelNames();


//verified customer id & name
let custId = "";
let custName = "";
let vehicleId = ""


//verify customer (username & password)
$('#btnVerifyCustomer').click(function () {
    // get un pw
    let username = $('#txtCustomerUsername').val();
    let password = $('#pwdCustomerPassword').val();

    $.ajax({
        url: baseURL + "customer/verify",
        method: "get",
        data: {
            "username": username,
            "password": password
        },
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            //record id & name
            custId = resp.data.nic;
            custName = resp.data.name;

            //show name & nic
            $('#lblCustName').text(resp.data.name);
            $('#lblCustNIC').text(resp.data.nic);

            //show status
            $('#lblVerificationStatus').text("Verification Successful.");

            //disable input fields
            $('#txtCustomerUsername').attr('disabled', true);
            $('#pwdCustomerPassword').attr('disabled', true);
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
            //show status
            $('#lblVerificationStatus').text("Verification Failed.");
        }
    });
});


//load all vehicles to the combo box
function loadAllVehicleModelNames() {
    $.ajax({
        url: baseURL + "vehicle/loadAll",
        method: "get",
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            for (let vehicle of resp.data) {
                var option = '<option>' + vehicle.model + '</option>';
                //append to the combo box
                $('#cbxSelectVehicle').append(option);
            }
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
}


//load car card of the selected vehicle
$('#cbxSelectVehicle').change(function () {
    //get selection
    let modelName = $(this).val();

    //select container
    var dynamic = document.querySelector('#cars_container');

    //generated id's for bootstrap controls
    let id = 0;

    //request for the vehicle
    $.ajax({
        url: baseURL + "vehicle/byModel",
        method: "get",
        data: {
            "model": modelName
        },
        dataType: "json",
        success: function (vehicle) {
            console.log(vehicle);
            //append card to the existing cards list
            dynamic.innerHTML = `<div class="col">
                        <div class="card">
                            <div class="card-header fw-semibold fst-italic">${vehicle.data.type}</div>
                            <div id="carouselExampleControls${id}" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="../assets/images/13-min-32.jpg" class="d-block w-100" alt="..."
                                             style="height: 40vh;">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="../assets/images/75702.png" class="d-block w-100" alt="..."
                                             style="height: 40vh;">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="../assets/images/istockphoto-628453996-612x612.jpg" class="d-block w-100"
                                             alt="..."
                                             style="height: 40vh;">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleControls${id}"
                                        data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleControls${id}"
                                        data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title fs-3">${vehicle.data.model}</h5>
                                <p class="card-text fst-italic">${vehicle.data.description}</p>
                                <div class="accordion mt-3" id="accordionExample${id}">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="heading${id}">
                                            <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse${id}" aria-expanded="false"
                                                    aria-controls="collapse${id}">
                                                Specifications
                                            </button>
                                        </h2>
                                        <div id="collapse${id}" class="accordion-collapse collapse"
                                             aria-labelledby="heading"
                                             data-bs-parent="#accordionExample${id}">
                                            <div class="accordion-body text-secondary">
                                                <ul class="list-group list-group-horizontal fw-bold">
                                                    <li class="list-group-item col-7">Make</li>
                                                    <li class="list-group-item col-5">${vehicle.data.make}</li>
                                                </ul>
                                                <ul class="list-group list-group-horizontal">
                                                    <li class="list-group-item col-7">YOM</li>
                                                    <li class="list-group-item col-5">${vehicle.data.yom}</li>
                                                </ul>
                                                <ul class="list-group list-group-horizontal">
                                                    <li class="list-group-item col-7">Fuel Type</li>
                                                    <li class="list-group-item col-5">${vehicle.data.fuelType}</li>
                                                </ul>
                                                <ul class="list-group list-group-horizontal">
                                                    <li class="list-group-item col-7">Transmission</li>
                                                    <li class="list-group-item col-5">${vehicle.data.transmission}</li>
                                                </ul>
                                                <ul class="list-group list-group-horizontal">
                                                    <li class="list-group-item col-7">Mileage</li>
                                                    <li class="list-group-item col-5">${vehicle.data.mileage}</li>
                                                </ul>
                                                <ul class="list-group list-group-horizontal">
                                                    <li class="list-group-item col-7">Passenger Count</li>
                                                    <li class="list-group-item col-5">${vehicle.data.passengers}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul class="list-group list-group-horizontal fw-bold mt-2">
                                    <li class="list-group-item list-group-item-primary col-9">Daily Rate (Rs.)</li>
                                    <li class="list-group-item list-group-item-primary col-3">${vehicle.data.dailyRate}</li>
                                </ul>
                                <ul class="list-group list-group-horizontal fw-bold">
                                    <li class="list-group-item list-group-item-primary col-9">Daily KM</li>
                                    <li class="list-group-item list-group-item-primary col-3">${vehicle.data.kmDaily}</li>
                                </ul>
                                <ul class="list-group list-group-horizontal fw-bold">
                                    <li class="list-group-item list-group-item-primary col-9">Monthly Rate (Rs.)</li>
                                    <li class="list-group-item list-group-item-primary col-3">${vehicle.data.monthlyRate}</li>
                                </ul>
                                <ul class="list-group list-group-horizontal fw-bold">
                                    <li class="list-group-item list-group-item-primary col-9">Monthly KM</li>
                                    <li class="list-group-item list-group-item-primary col-3">${vehicle.data.kmMonthly}</li>
                                </ul>
                                <ul class="list-group list-group-horizontal fw-bold">
                                    <li class="list-group-item list-group-item-primary col-9">Rate Per Extra KM (Rs.)</li>
                                    <li class="list-group-item list-group-item-primary col-3">${vehicle.data.extraKmRate}</li>
                                </ul>
                                <ul class="list-group list-group-horizontal fw-bold mt-2">
                                    <li class="list-group-item list-group-item-success col-9">Available for Rent</li>
                                    <li class="list-group-item list-group-item-success col-3">20&nbsp;&nbsp;&nbsp;Cars</li>
                                </ul>
                            </div>
                        </div>
                    </div>`;

            // record registration no
            vehicleId = vehicle.data.registrationNo;

            //disable dropdown
            $('#cbxSelectVehicle').attr('disabled', true);
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});


//place rent (save rent)
$('#btnPlaceRent').click(function () {
    var date = new Date();

    // wrap data (rent)
    var rent = {
        "id": "R001",
        "nic": custId,
        "registrationNo": vehicleId,
        "date": date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
        "time": date.getHours() + ":" + date.getMinutes()
    };

    //wrap data (rent_details)
    var rentDetails = {
        "id": "001",
        "driver": "D001",
        "pickUpDate": $('#dtePikrPickup').val(),
        "pickUpTime": $('#timePikrPickup').val(),
        "bankImg": true,
        "damageWaiver": 0.0,
        "returnDate": $('#dtePikrReturn').val(),
        "returnTime": $('#timePikrReturn').val(),
        "rentDuration": "4 Days"
    }


});

// // var titlearray =["css","js","python","java","android","jquery","ruby"];
// // var descriptionarray =["css style","js program","python code","java objects","android program","jquery objects","ruby code"];
// //
// // var dynamic = document.querySelector('.container');
// // for (var i = 0; i < titlearray.length; i++) {
// //     var fetch = document.querySelector('.container').innerHTML;
// //     dynamic.innerHTML = `<div id="cards${i}" class="boxes">
// //       <div class="box-content">
// //         <h2>${titlearray[i]}</h2>
// //         <p>
// //           ${descriptionarray[i]}
// //         </p>
// //         <a class="showmore" href="#">ReadMore</a>
// //       </div>
// //     </div>` + fetch ;
// //     var bgimg = document.getElementById(`cards${i}`);
// //     bgimg.style.backgroundImage = `url('img/${titlearray[i]}.jpg')`;
// // }


// backend url
let baseURL = "http://localhost:8080/Back_End_war_exploded/";

// loader
$(window).on('load', function () {
    $("#loader_Container").fadeOut(700);
});

//load all vehicles at the startup
loadAllVehicles();


// load all vehicles as cards
function loadAllVehicles() {
    //select container
    var dynamic = document.querySelector('#cars_container');

    //generated id's for bootstrap controls
    let id = 0;

    //request all vehicles from the backend
    $.ajax({
        url: baseURL + "vehicle/loadAll",
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            //generate cars for each vehicle
            for (let vehicle of resp.data) {
                //append card to the existing cards list
                dynamic.innerHTML = document.querySelector('#cars_container').innerHTML + `<div class="col">
                        <div class="card">
                            <div class="card-header fw-semibold fst-italic">${vehicle.type}</div>
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
                                <h5 class="card-title fs-3">${vehicle.model}</h5>
                                <p class="card-text fst-italic">${vehicle.description}</p>
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
                                                    <li class="list-group-item col-5">${vehicle.make}</li>
                                                </ul>
                                                <ul class="list-group list-group-horizontal">
                                                    <li class="list-group-item col-7">YOM</li>
                                                    <li class="list-group-item col-5">${vehicle.yom}</li>
                                                </ul>
                                                <ul class="list-group list-group-horizontal">
                                                    <li class="list-group-item col-7">Fuel Type</li>
                                                    <li class="list-group-item col-5">${vehicle.fuelType}</li>
                                                </ul>
                                                <ul class="list-group list-group-horizontal">
                                                    <li class="list-group-item col-7">Transmission</li>
                                                    <li class="list-group-item col-5">${vehicle.transmission}</li>
                                                </ul>
                                                <ul class="list-group list-group-horizontal">
                                                    <li class="list-group-item col-7">Mileage</li>
                                                    <li class="list-group-item col-5">${vehicle.mileage}</li>
                                                </ul>
                                                <ul class="list-group list-group-horizontal">
                                                    <li class="list-group-item col-7">Passenger Count</li>
                                                    <li class="list-group-item col-5">${vehicle.passengers}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul class="list-group list-group-horizontal fw-bold mt-2">
                                    <li class="list-group-item list-group-item-primary col-9">Daily Rate (Rs.)</li>
                                    <li class="list-group-item list-group-item-primary col-3">${vehicle.dailyRate}</li>
                                </ul>
                                <ul class="list-group list-group-horizontal fw-bold">
                                    <li class="list-group-item list-group-item-primary col-9">Daily KM</li>
                                    <li class="list-group-item list-group-item-primary col-3">${vehicle.kmDaily}</li>
                                </ul>
                                <ul class="list-group list-group-horizontal fw-bold">
                                    <li class="list-group-item list-group-item-primary col-9">Monthly Rate (Rs.)</li>
                                    <li class="list-group-item list-group-item-primary col-3">${vehicle.monthlyRate}</li>
                                </ul>
                                <ul class="list-group list-group-horizontal fw-bold">
                                    <li class="list-group-item list-group-item-primary col-9">Monthly KM</li>
                                    <li class="list-group-item list-group-item-primary col-3">${vehicle.kmMonthly}</li>
                                </ul>
                                <ul class="list-group list-group-horizontal fw-bold">
                                    <li class="list-group-item list-group-item-primary col-9">Rate Per Extra KM (Rs.)</li>
                                    <li class="list-group-item list-group-item-primary col-3">${vehicle.extraKmRate}</li>
                                </ul>
                                <ul class="list-group list-group-horizontal fw-bold mt-2">
                                    <li class="list-group-item list-group-item-success col-9">Available for Rent</li>
                                    <li class="list-group-item list-group-item-success col-3">20&nbsp;&nbsp;&nbsp;Cars</li>
                                </ul>
                                <a href="PlaceRent.html" class="row m-0 mt-4 text-decoration-none">
                                   <button class="btn col-4 fs-5 btn-outline-success d-grid fw-bold m-0 mx-auto w-100">Rent</button>
                                </a>
                            </div>
                        </div>
                    </div>`;

                //increment id for a new id for a new card
                id = id + 1;
            }
        }
    });
}

//set selected range value to the label
function updateTextInput(input) {
    $('#lblPriceRange').value = input;
}

//search filters and load vehicles
$('#btnSearchFilter').click(function () {
    var type = $('#cbxFilterByCarType option:selected').text();
    var make = $('#cbxFilterByCarMake option:selected').text();
    var passengers = parseInt($('#cbxFilterByCarPssngrCount option:selected').text());
    var fuelType = $('#cbxFilterByCarFuelType option:selected').text();
    var transmission = $('#cbxFilterByCarTransmission option:selected').text();

    //select container
    var dynamic = document.querySelector('#cars_container');

    //generated id's for bootstrap controls
    let id = 0;

    //request for matching cars
    $.ajax({
        url: baseURL + "vehicle/filter" + "",
        method: "get",
        data: {
            "type": type,
            "make": make,
            "passengers": passengers,
            "fuelType": fuelType,
            "transmission": transmission
        },
        dataType: "json",
        success: function (resp) {
            console.log(resp);

            //generate cars for each vehicle
            for (let vehicle of resp.data) {
                //append card to the existing cards list
                dynamic.innerHTML = document.querySelector('#cars_container').innerHTML + `<div class="col">
                        <div class="card">
                            <div class="card-header fw-semibold fst-italic">${vehicle.type}</div>
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
                                <h5 class="card-title fs-3">${vehicle.model}</h5>
                                <p class="card-text fst-italic">${vehicle.description}</p>
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
                                                    <li class="list-group-item col-5">${vehicle.make}</li>
                                                </ul>
                                                <ul class="list-group list-group-horizontal">
                                                    <li class="list-group-item col-7">YOM</li>
                                                    <li class="list-group-item col-5">${vehicle.yom}</li>
                                                </ul>
                                                <ul class="list-group list-group-horizontal">
                                                    <li class="list-group-item col-7">Fuel Type</li>
                                                    <li class="list-group-item col-5">${vehicle.fuelType}</li>
                                                </ul>
                                                <ul class="list-group list-group-horizontal">
                                                    <li class="list-group-item col-7">Transmission</li>
                                                    <li class="list-group-item col-5">${vehicle.transmission}</li>
                                                </ul>
                                                <ul class="list-group list-group-horizontal">
                                                    <li class="list-group-item col-7">Mileage</li>
                                                    <li class="list-group-item col-5">${vehicle.mileage}</li>
                                                </ul>
                                                <ul class="list-group list-group-horizontal">
                                                    <li class="list-group-item col-7">Passenger Count</li>
                                                    <li class="list-group-item col-5">${vehicle.passengers}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul class="list-group list-group-horizontal fw-bold mt-2">
                                    <li class="list-group-item list-group-item-primary col-9">Daily Rate (Rs.)</li>
                                    <li class="list-group-item list-group-item-primary col-3">${vehicle.dailyRate}</li>
                                </ul>
                                <ul class="list-group list-group-horizontal fw-bold">
                                    <li class="list-group-item list-group-item-primary col-9">Daily KM</li>
                                    <li class="list-group-item list-group-item-primary col-3">${vehicle.kmDaily}</li>
                                </ul>
                                <ul class="list-group list-group-horizontal fw-bold">
                                    <li class="list-group-item list-group-item-primary col-9">Monthly Rate (Rs.)</li>
                                    <li class="list-group-item list-group-item-primary col-3">${vehicle.monthlyRate}</li>
                                </ul>
                                <ul class="list-group list-group-horizontal fw-bold">
                                    <li class="list-group-item list-group-item-primary col-9">Monthly KM</li>
                                    <li class="list-group-item list-group-item-primary col-3">${vehicle.kmMonthly}</li>
                                </ul>
                                <ul class="list-group list-group-horizontal fw-bold">
                                    <li class="list-group-item list-group-item-primary col-9">Rate Per Extra KM (Rs.)</li>
                                    <li class="list-group-item list-group-item-primary col-3">${vehicle.extraKmRate}</li>
                                </ul>
                                <ul class="list-group list-group-horizontal fw-bold mt-2">
                                    <li class="list-group-item list-group-item-success col-9">Available for Rent</li>
                                    <li class="list-group-item list-group-item-success col-3">20&nbsp;&nbsp;&nbsp;Cars</li>
                                </ul>
                                <a href="PlaceRent.html" class="row m-0 mt-4 text-decoration-none">
                                   <button class="btn col-4 fs-5 btn-outline-success d-grid fw-bold m-0 mx-auto w-100">Rent</button>
                                </a>
                            </div>
                        </div>
                    </div>`;

                //increment id for a new id for a new card
                id = id + 1;
            }
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });

});


//reset filter combo boxes
$('#btnResetFilter').click(function () {
    $('#cbxFilterByCarType').val('option:selected');
    $('#cbxFilterByCarMake option:selected').text();
    $('#cbxFilterByCarPssngrCount option:selected').text();
    $('#cbxFilterByCarFuelType option:selected').text();
    $('#cbxFilterByCarTransmission option:selected').text();

    //load all vehicles
    loadAllVehicles();
});

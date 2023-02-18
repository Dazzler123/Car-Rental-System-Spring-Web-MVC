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
        url: baseURL + "vehicle?type=" + type + "," + "make=?" + make + "," + "passengers=?" +
            passengers + "," + "fuelType=?" + fuelType + "," + "transmission=?" + transmission + "",
        method: "get",
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


// function getVehicleRate(id) {
//     var rates = {
//         "daily_rate":"",
//         "km_daily":"",
//         "monthly_rate":"",
//         "km_monthly":"",
//         "extra_km_rate":""
//     };
//
//     //get vehicle rates
//     $.ajax({
//         url: baseURL + "rates?id=" + id + "",
//         method: "get",
//         dataType: "json",
//         success: function (data) {
//             console.log(data)
//             // rates.daily_rate = data.daily_rate;
//             // rates.km_daily = data.km_daily;
//             // rates.monthly_rate = data.monthly_rate;
//             // rates.km_monthly = data.km_monthly;
//             // rates.extra_km_rate = data.extra_km_rate;
//         },
//         error: function (error) {
//             alert(JSON.parse(error.responseText).message);
//         }
//     });
//     return rates;
// }


// add car cards to the car container
// function generateCarCard() {
//     //select container
//     var dynamic = document.querySelector('#cars_container');
//
//     //generated id's for bootstrap controls
//     let id = 0;
//
//     //append the new code to the existing code
//     dynamic.innerHTML = `<div class="col">
//         <div class="card">
//             <!--------car type--------->
//             <div class="card-header fw-semibold fst-italic">General Cars</div>
//             <!-----------image carousel---------->
//             <div id="carouselExampleControls1" class="carousel slide" data-bs-ride="carousel">
//                 <div class="carousel-inner">
//                     <div class="carousel-item active">
//                         <img src="../assets/images/13-min-32.jpg" class="d-block w-100" alt="..." style="height: 40vh;">
//                     </div>
//                     <div class="carousel-item">
//                         <img src="../assets/images/75702.png" class="d-block w-100" alt="..." style="height: 40vh;">
//                     </div>
//                     <div class="carousel-item">
//                         <img src="../assets/images/istockphoto-628453996-612x612.jpg" class="d-block w-100" alt="..."
//                              style="height: 40vh;">
//                     </div>
//                 </div>
//                 <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1"
//                         data-bs-slide="prev">
//                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span class="visually-hidden">Previous</span>
//                 </button>
//                 <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1"
//                         data-bs-slide="next">
//                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span class="visually-hidden">Next</span>
//                 </button>
//             </div>
//             <!----------car body content----------->
//             <div class="card-body">
//                 <!------head title------>
//                 <h5 class="card-title fs-3">Mercedes Benz CLA 200 2022</h5>
//                 <!-------description------->
//                 <p class="card-text fst-italic">General type car recommended for day-to-day use. General type car
//                     recommended for day-to-day use.</p>
//                 <!-----------specifications accordion--------->
//                 <div class="accordion mt-3" id="accordionExample">
//                     <div class="accordion-item">
//                         <h2 class="accordion-header" id="headingTwo">
//                             <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                                     data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                                 Specifications
//                             </button>
//                         </h2>
//                         <!---------------specifications-------------->
//                         <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
//                              data-bs-parent="#accordionExample">
//                             <div class="accordion-body text-secondary">
//                                 <ul class="list-group list-group-horizontal fw-bold">
//                                     <li class="list-group-item col-7">Make</li>
//                                     <li class="list-group-item col-5">Mercedes Benz</li>
//                                 </ul>
//                                 <ul class="list-group list-group-horizontal">
//                                     <li class="list-group-item col-7">YOM</li>
//                                     <li class="list-group-item col-5">2022</li>
//                                 </ul>
//                                 <ul class="list-group list-group-horizontal">
//                                     <li class="list-group-item col-7">Fuel Type</li>
//                                     <li class="list-group-item col-5">Petrol</li>
//                                 </ul>
//                                 <ul class="list-group list-group-horizontal">
//                                     <li class="list-group-item col-7">Transmission</li>
//                                     <li class="list-group-item col-5">6 Speed</li>
//                                 </ul>
//                                 <ul class="list-group list-group-horizontal">
//                                     <li class="list-group-item col-7">Mileage</li>
//                                     <li class="list-group-item col-5">18.5 kmpl approx</li>
//                                 </ul>
//                                 <ul class="list-group list-group-horizontal">
//                                     <li class="list-group-item col-7">Passenger Count</li>
//                                     <li class="list-group-item col-5">5</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <!-----------rate price details list------------->
//                 <ul class="list-group list-group-horizontal fw-bold mt-2">
//                     <li class="list-group-item list-group-item-primary col-9">Daily Rate (Rs.)</li>
//                     <li class="list-group-item list-group-item-primary col-3">3,800</li>
//                 </ul>
//                 <ul class="list-group list-group-horizontal fw-bold">
//                     <li class="list-group-item list-group-item-primary col-9">Daily KM</li>
//                     <li class="list-group-item list-group-item-primary col-3">100</li>
//                 </ul>
//                 <ul class="list-group list-group-horizontal fw-bold">
//                     <li class="list-group-item list-group-item-primary col-9">Monthly Rate (Rs.)</li>
//                     <li class="list-group-item list-group-item-primary col-3">90, 200</li>
//                 </ul>
//                 <ul class="list-group list-group-horizontal fw-bold">
//                     <li class="list-group-item list-group-item-primary col-9">Monthly KM</li>
//                     <li class="list-group-item list-group-item-primary col-3">2,400</li>
//                 </ul>
//                 <ul class="list-group list-group-horizontal fw-bold">
//                     <li class="list-group-item list-group-item-primary col-9">Price Per Extra KM (Rs.)</li>
//                     <li class="list-group-item list-group-item-primary col-3">35</li>
//                 </ul>
//                 <!-----------available for rent--------->
//                 <ul class="list-group list-group-horizontal fw-bold mt-2">
//                     <li class="list-group-item list-group-item-success col-9">Available for Rent</li>
//                     <li class="list-group-item list-group-item-success col-3">20&nbsp;&nbsp;&nbsp;Cars</li>
//                 </ul>
//                 <!-------------rent button--------------->
//                 <button type="button" class="btn col-10 fs-5 btn-outline-success d-grid mx-auto fw-bold mt-4">Rent
//                 </button>
//             </div>
//         </div>
//     </div>`;
// }



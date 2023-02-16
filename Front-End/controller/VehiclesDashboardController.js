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
// loader
$(window).on('load', function () {
    $("#loader_Container").fadeOut(700);
});

$('#btngoaddacar').click(function () {
    generateCarCard();
});


// add car cards to the car container
function generateCarCard() {
    // select container
    var dynamic = document.querySelector('#cars_container');

    //append the new code to the existing code
    dynamic.innerHTML = `<div class="col">
        <div class="card">
            <!--------car type--------->
            <div class="card-header fw-semibold fst-italic">General Cars</div>
            <!-----------image carousel---------->
            <div id="carouselExampleControls1" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../assets/images/13-min-32.jpg" class="d-block w-100" alt="..." style="height: 40vh;">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/images/75702.png" class="d-block w-100" alt="..." style="height: 40vh;">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/images/istockphoto-628453996-612x612.jpg" class="d-block w-100" alt="..."
                             style="height: 40vh;">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1"
                        data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1"
                        data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <!----------car body content----------->
            <div class="card-body">
                <!------head title------>
                <h5 class="card-title fs-3">Mercedes Benz CLA 200 2022</h5>
                <!-------description------->
                <p class="card-text fst-italic">General type car recommended for day-to-day use. General type car
                    recommended for day-to-day use.</p>
                <!-----------specifications accordion--------->
                <div class="accordion mt-3" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Specifications
                            </button>
                        </h2>
                        <!---------------specifications-------------->
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                             data-bs-parent="#accordionExample">
                            <div class="accordion-body text-secondary">
                                <ul class="list-group list-group-horizontal fw-bold">
                                    <li class="list-group-item col-7">Make</li>
                                    <li class="list-group-item col-5">Mercedes Benz</li>
                                </ul>
                                <ul class="list-group list-group-horizontal">
                                    <li class="list-group-item col-7">YOM</li>
                                    <li class="list-group-item col-5">2022</li>
                                </ul>
                                <ul class="list-group list-group-horizontal">
                                    <li class="list-group-item col-7">Fuel Type</li>
                                    <li class="list-group-item col-5">Petrol</li>
                                </ul>
                                <ul class="list-group list-group-horizontal">
                                    <li class="list-group-item col-7">Transmission</li>
                                    <li class="list-group-item col-5">6 Speed</li>
                                </ul>
                                <ul class="list-group list-group-horizontal">
                                    <li class="list-group-item col-7">Mileage</li>
                                    <li class="list-group-item col-5">18.5 kmpl approx</li>
                                </ul>
                                <ul class="list-group list-group-horizontal">
                                    <li class="list-group-item col-7">Passenger Count</li>
                                    <li class="list-group-item col-5">5</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-----------rate price details list------------->
                <ul class="list-group list-group-horizontal fw-bold mt-2">
                    <li class="list-group-item list-group-item-primary col-9">Daily Rate (Rs.)</li>
                    <li class="list-group-item list-group-item-primary col-3">3,800</li>
                </ul>
                <ul class="list-group list-group-horizontal fw-bold">
                    <li class="list-group-item list-group-item-primary col-9">Daily KM</li>
                    <li class="list-group-item list-group-item-primary col-3">100</li>
                </ul>
                <ul class="list-group list-group-horizontal fw-bold">
                    <li class="list-group-item list-group-item-primary col-9">Monthly Rate (Rs.)</li>
                    <li class="list-group-item list-group-item-primary col-3">90, 200</li>
                </ul>
                <ul class="list-group list-group-horizontal fw-bold">
                    <li class="list-group-item list-group-item-primary col-9">Monthly KM</li>
                    <li class="list-group-item list-group-item-primary col-3">2,400</li>
                </ul>
                <ul class="list-group list-group-horizontal fw-bold">
                    <li class="list-group-item list-group-item-primary col-9">Price Per Extra KM (Rs.)</li>
                    <li class="list-group-item list-group-item-primary col-3">35</li>
                </ul>
                <!-----------available for rent--------->
                <ul class="list-group list-group-horizontal fw-bold mt-2">
                    <li class="list-group-item list-group-item-success col-9">Available for Rent</li>
                    <li class="list-group-item list-group-item-success col-3">20&nbsp;&nbsp;&nbsp;Cars</li>
                </ul>
                <!-------------rent button--------------->
                <button type="button" class="btn col-10 fs-5 btn-outline-success d-grid mx-auto fw-bold mt-4">Rent
                </button>
            </div>
        </div>
    </div>`;
}



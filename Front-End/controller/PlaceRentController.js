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

//file reader obj
const reader = new FileReader();


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

            //remove duplicated car model names
            let cars = removeDuplicateCarModelNames(resp.data);

            for (let vehicle of cars) {
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

//get available vehicle count (not reserved)
function availableCount(modelName) {
    var count = 0;

    //request for count
    $.ajax({
        url: baseURL + "vehicle/available",
        method: "get",
        async: false,
        data: {
            "model": modelName,
            "reserved": false,
        },
        dataType: "json",
        success: function (resp) {
            count = parseInt(resp);
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
    return count;
}


//delete duplicated car models from the response
function removeDuplicateCarModelNames(allVehicles) {
    // By identifier
    return allVehicles.filter(function (item, index) {
        return index === allVehicles.findIndex(function (obj) {
            return item.model === obj.model;
        })
    });
}


//load car card of the selected vehicle
$('#cbxSelectVehicle').change(function () {
    //get selection
    let modelName = $(this).val();

    //select container
    var dynamic = document.querySelector('#cars_container');

    $('#lblDamageWaiverAmt').text(null);

    //generated id's for bootstrap controls
    let id = 0;

    //request for the vehicle
    $.ajax({
        url: baseURL + "vehicle/byModel",
        method: "get",
        data: {
            "model": modelName,
            "reserved": false
        },
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            for (const vehicle of resp.data) {
                //get available vehicle count from this model
                var count = availableCount(vehicle.model);

                // Get images from localStorage
                const frontImage = localStorage.getItem(vehicle.model + "1");
                const rearImage = localStorage.getItem(vehicle.model + "2");
                const interiorImage = localStorage.getItem(vehicle.model + "3");

                //append card to the existing cards list
                dynamic.innerHTML = `<div class="col">
                        <div class="card">
                            <div class="card-header fw-semibold fst-italic">${vehicle.type}</div>
                            <div id="carouselExampleControls${id}" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="${frontImage}" class="d-block w-100" alt="..."
                                             style="height: 40vh;">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="${rearImage}" class="d-block w-100" alt="..."
                                             style="height: 40vh;">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="${interiorImage}" class="d-block w-100"
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
                                    <li class="list-group-item list-group-item-success col-3">${count}</li>
                                </ul>
                            </div>
                        </div>
                    </div>`;

                // record registration no
                vehicleId = vehicle.registrationNo;

                //show loss damage amt
                setLossDamagePaymentValue(vehicle.type);

                //just record the first available car and break the loop
                break;
            }
            console.log(vehicleId);
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});


function setLossDamagePaymentValue(type) {
    //show damage waiver amount
    if (type == "General Car") {
        $('#lblDamageWaiverAmt').append("10000.00");
    } else if (type == "Premium Car") {
        $('#lblDamageWaiverAmt').append("15000.00")
    } else {
        $('#lblDamageWaiverAmt').append("20000.00")
    }
}


//save rent request (save request)
$('#btnPlaceRent').click(function () {
    var date = new Date();
    let driverId;

    // assign a non-occupied driver
    if ($('#driverTrue').is(":checked")) {
        driverId = getNonOccupiedDriver();
    } else {
        driverId = "SELF";
    }

    let pikUpD = $('#dtePikrPickup').val();
    let pikUpT = $('#timePikrPickup').val();
    let retD = $('#dtePikrReturn').val();
    let retT = $('#timePikrReturn').val();
    let bnkImg = custId + driverId + retD + retT + vehicleId;
    let rentDura = getDateDifference($('#dtePikrRentFrom').val(), $('#dtePikrRentTo').val());
    let dateD = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    let timeT = date.getHours() + ":" + date.getMinutes();

    //send save request
    $.ajax({
        url: baseURL + "rentalRequest",
        method: "post",
        data: {
            "requestId": 0,
            "customerNic": custId,
            "registrationNo": vehicleId,
            "driverNic": driverId,
            "date": dateD,
            "time": timeT,
            "pickUpDate": pikUpD,
            "pickUpTime": pikUpT,
            "bankImgKey": bnkImg,
            "returnDate": retD,
            "returnTime": retT,
            "rentDuration": rentDura,
            "status": "PENDING",
            "reason": ""
        },
        dataType: "json",
        success: function (res) {
            alert(res.message);
            console.log("Rental Request saved.");

            //=== save loss damage waiver payment bank slip on localStorage ==
            saveLossDamagePaymentBankSlip(bnkImg);

            //update driver as occupied
            if (driverId === "SELF") {
            } else {
                setDriverAsOccupied(driverId);
            }

            //update vehicle as reserved
            setVehicleAsReserved();
        },
        error: function (error) {
            alert(error.message);
        }
    });
});


function saveLossDamagePaymentBankSlip(bnkImg) {
    const imgInput = document.getElementById('imgBankPaymentSlip');
    const img = imgInput.files[0];
    reader.readAsDataURL(img);
    reader.addEventListener('load', () => {
        const url = reader.result
        localStorage.setItem(bnkImg, url);
    });
}


function setDriverAsOccupied(id) {
    let change;

    //get driver
    $.ajax({
        url: baseURL + "driver/search?nic=" + id + "",
        method: "get",
        async: false,
        dataType: "json",
        success: function (resp) {
            change = resp.data;
            change.occupied = true;
        },
        error: function (error) {
            alert(error.message);
        }
    });

    //update (save) driver occupied as true
    $.ajax({
        url: baseURL + "driver",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(change),
        dataType: "json",
        success: function (resp) {
            console.log(resp.message);
        },
        error: function (error) {
            alert(error.message);
        }
    });
}


function setVehicleAsReserved() {
    let change;

    //get vehicle
    $.ajax({
        url: baseURL + "vehicle/search?registrationNo=" + vehicleId + "",
        method: "get",
        async: false,
        dataType: "json",
        success: function (resp) {
            change = resp.data;
            change.reserved = true;
        },
        error: function (error) {
            alert(error.message);
        }
    });

    //update (save) vehicle reserved as true
    $.ajax({
        url: baseURL + "vehicle",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(change),
        dataType: "json",
        success: function (resp) {
            console.log(resp.message);
        },
        error: function (error) {
            alert(error.message);
        }
    });
}


//search for non-occupied drivers
function getNonOccupiedDriver() {
    var drv;
    $.ajax({
        url: baseURL + "driver?occupied=" + false + "",
        method: "get",
        async: false,
        dataType: "json",
        success: function (resp) {
            drv = resp.data[0].nic;
        },
        error: function (error) {
            alert(error.message);
        }
    });
    console.log(drv);
    return drv;
}


function getDateDifference(dateFrom, dateTo) {
    // const diffTime = Math.abs(dateFrom - dateTo);
    // const diffDays = Math.ceil(diffTime / (24 * 3600 * 1000));
    var t2 = new Date(dateFrom);
    var t1 = new Date(dateTo);

    return (t1 - t2) / (24 * 3600 * 1000);
}
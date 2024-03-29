// loader
$(window).on('load', function () {
    $("#loader_Container").fadeOut(700);
});

// backend url
let baseURL = "http://localhost:8080/Back_End_war_exploded/";


//load all rental requests to the table
loadAllRentalRequests();

//request id
let requestID = "";
let custID = "";
let driverID = "";
let vehicleID = "";


function loadAllRentalRequests() {
    $.ajax({
        url: baseURL + "rentalRequest/loadAll" + "",
        method: "get",
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            for (const c of resp.data) {
                if (c.status === "ACCEPTED" || c.status === "DENIED") {
                    continue;
                } else {
                    var row = '<tr><td>' + c.requestId + '</td><td>' + c.customerNic + '</td><td>' +
                        c.registrationNo + '</td><td>' + c.driverNic + '</td><td>' + c.date + '</td><td>' + c.time +
                        '</td><td>' +
                        c.pickUpDate + '</td><td>' + c.pickUpTime + '</td><td>' + c.returnDate +
                        '</td><td>' + c.returnTime + '</td><td>' + c.rentDuration + '</td></tr>';

                    //append to the table
                    $('#tblRequests').append(row);
                }
            }
            getRowDataToFields();
        },
        error: function (err) {
            alert(err.responseText.message);
        }
    });
}

//get table row data
function getRowDataToFields() {
    $('#tblRequests > tr').click(function () {
        var reqId = $(this).children(":eq(0)").text();
        var customerId = $(this).children(":eq(1)").text();
        var vehicleId = $(this).children(":eq(2)").text();
        var driverId = $(this).children(":eq(3)").text();
        var date = $(this).children(":eq(4)").text();
        var time = $(this).children(":eq(5)").text();
        var pickupDate = $(this).children(":eq(6)").text();
        var pickupTime = $(this).children(":eq(7)").text();
        var returnDate = $(this).children(":eq(8)").text();
        var returnTime = $(this).children(":eq(9)").text();
        var rentDuration = $(this).children(":eq(10)").text();

        // set text
        setTextFieldData(reqId, customerId, vehicleId, driverId, date, time, pickupDate, pickupTime, returnDate,
            returnTime, rentDuration);

        //set image
        // loadNicDlImage();
    });
}


function setTextFieldData(reqId, customerId, vehicleId, driverId, date, time, pickupDate, pickupTime, returnDate,
                          returnTime, rentDuration) {
    requestID = reqId;
    vehicleID = vehicleId;

    //load customer & driver
    loadCustomerDetails(customerId);
    loadDriverDetails(driverId);
    loadRequestDetails(reqId);
}

function loadCustomerDetails(id) {
    $.ajax({
        url: baseURL + "customer/search?nic=" + id + "",
        method: "get",
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            var customer = resp.data;
            //set data
            $('#lblCustomerNIC').val(customer.nic);
            $('#lblCustomerDLNo').val(customer.dl_no);
            $('#lblCustomerName').val(customer.name);
            $('#lblCustomerAddress').val(customer.address);
            $('#lblCustomerContactNo').val(customer.contact_no);
            $('#lblCustomerEmail').val(customer.email);
            $('#lblCustomerGender').val(customer.gender);

            //load nic/dl image
            // Get data URL from localStorage
            const url = localStorage.getItem(customer.nic);

            //set image
            const img = document.querySelector("#nicDlImg");
            img.src = url;

            custID = customer.nic;
        },
        error: function (err) {
            alert(err.responseText.message);
        }
    });
}


function loadDriverDetails(id) {
    if (id == "SELF") {
        //set text
        $('#lblDriverNIC').val("SELF");
        $('#lblDriverDLNo').val("SELF");
        $('#lblDriverName').val("SELF");
        $('#lblDriverAddress').val("SELF");
        $('#lblDriverContactNo').val("SELF");

        const img = document.querySelector("#driverNicDlImg");
        img.removeAttribute("src");
        img.setAttribute("alt", "No Driver has been hired by the customer");
    } else {
        $.ajax({
            url: baseURL + "driver/search?nic=" + id + "",
            method: "get",
            dataType: "json",
            success: function (resp) {
                console.log(resp);
                var driver = resp.data;
                //set data
                $('#lblDriverNIC').val(driver.nic);
                $('#lblDriverDLNo').val(driver.dlNo);
                $('#lblDriverName').val(driver.name);
                $('#lblDriverAddress').val(driver.address);
                $('#lblDriverContactNo').val(driver.contactNo);

                //load nic/dl image
                // Get data URL from localStorage
                const url = localStorage.getItem(driver.nic);

                //set image
                const img = document.querySelector("#driverNicDlImg");
                img.src = url;

                driverID = driver.nic;
            },
            error: function (err) {
                alert(err.responseText.message);
            }
        });
    }
}


function loadRequestDetails(id) {
    $.ajax({
        url: baseURL + "rentalRequest/search?requestId=" + id + "",
        method: "get",
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            var request = resp.data;
            //set data
            $('#lblPickUpDate').val(request.pickUpDate);
            $('#lblPickUpTime').val(request.pickUpTime);
            $('#lblReturnDate').val(request.returnDate);
            $('#lblReturnTime').val(request.returnTime);
            $('#lblRentDuration').val(request.rentDuration);

            //load nic/dl image
            // Get data URL from localStorage
            const url = localStorage.getItem(custID + driverID + request.returnDate + request.returnTime + vehicleID);

            //set image
            const img = document.querySelector("#bankSlipImage");
            img.src = url;
        },
        error: function (err) {
            alert(err.message);
        }
    });
}


$('#btnSearchDriver').click(function () {
    var replacedId = $('#txtDriverNIC').val();
    if (replacedId == "self" || replacedId == "Self" || replacedId == "SELF") {
        replaceDriver("SELF");
    } else {
        //search driver
        $.ajax({
            url: baseURL + "driver/search?nic=" + replacedId + "",
            method: "get",
            async: false,
            dataType: "json",
            success: function (resp) {
                var d = resp.data;
                //if the driver is occupied
                if (d.occupied) {
                    alert("This Driver has been occupied already. Please replace with a different Driver.");
                } else {
                    // mark old driver's id
                    let oldDriverID = driverID;
                    console.log(oldDriverID);

                    //load replaced driver's details
                    loadDriverDetails(d.nic);

                    driverID = d.nic;

                    //replace driver in the request entry
                    replaceDriver(d.nic,oldDriverID);
                }
            },
            error: function (error) {
                alert(error.message);
            }
        });
    }
});


//replace driver in a request entry
function replaceDriver(id,oldDriverID) {
    let change;

    //get request details
    $.ajax({
        url: baseURL + "rentalRequest/search?requestId=" + requestID + "",
        method: "get",
        dataType: "json",
        async: false,
        success: function (resp) {
            console.log(resp.data);
            change = resp.data;
            change.driverNic = id;
        },
        error: function (err) {
            alert(err.message);
        }
    });

    //update (save) driver in rental_requests table
    $.ajax({
        url: baseURL + "rentalRequest",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(change),
        dataType: "json",
        success: function (resp) {
            alert(resp.message);

            //update driver as occupied
            setDriverAsOccupied(id);

            //update before selected driver's occupied status back to as available
            setDriverAsNonOccupied(oldDriverID);
        },
        error: function (err) {
            alert(err.message);
        }
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


function setDriverAsNonOccupied(id) {
    let change;

    //get driver
    $.ajax({
        url: baseURL + "driver/search?nic=" + id + "",
        method: "get",
        async: false,
        dataType: "json",
        success: function (resp) {
            change = resp.data;
            change.occupied = false;
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


$('#btnAcceptRequest').click(function () {
    let change;

    //get request data and set changes
    $.ajax({
        url: baseURL + "rentalRequest/search?requestId=" + requestID + "",
        method: "get",
        async: false,
        dataType: "json",
        success: function (resp) {
            console.log(resp.data);
            change = resp.data;
            change.status = "ACCEPTED";
        },
        error: function (error) {
            alert(error.message);
        }
    });

    //update (save) data
    $.ajax({
        url: baseURL + "rentalRequest",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(change),
        dataType: "json",
        success: function (resp) {
            console.log(resp.message);
            alert("Request accepted. Status feedback will be sent to the customer.");

            //refresh page
            location.reload();
        },
        error: function (error) {
            alert(error.message);
        }
    });
});


$('#btnDenyRequest').click(function () {
    let change;

    //get request data and set changes
    $.ajax({
        url: baseURL + "rentalRequest/search?requestId=" + requestID + "",
        method: "get",
        async: false,
        dataType: "json",
        success: function (resp) {
            console.log(resp.data);
            change = resp.data;
            change.reason = $('#txtDenialReason').val();
            change.status = "DENIED";
        },
        error: function (error) {
            alert(error.message);
        }
    });

    //update (save) data
    $.ajax({
        url: baseURL + "rentalRequest",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(change),
        dataType: "json",
        success: function (resp) {
            console.log(resp.message);
            alert("Request denied. Status and reason feedback will be sent to the customer.");

            //refresh page
            location.reload();
        },
        error: function (error) {
            alert(error.message);
        }
    });

    //update driver and vehicle as available
    setDriverAsNonOccupied(driverID);
    setVehicleAsAvailable();
});


function setVehicleAsAvailable() {
    let change;

    //get vehicle
    $.ajax({
        url: baseURL + "vehicle/search?registrationNo=" + vehicleId + "",
        method: "get",
        async: false,
        dataType: "json",
        success: function (resp) {
            change = resp.data;
            change.reserved = false;
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
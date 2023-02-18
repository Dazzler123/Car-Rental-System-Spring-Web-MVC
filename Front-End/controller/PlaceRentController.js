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
                var option = '<option>'+ vehicle.model + '</option>';
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
    $.ajax({
        url: baseURL + "vehicle/loadAll",
        method: "get",
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            for (let vehicle of resp.data) {
                var option = '<option>'+ vehicle.model + '</option>';
                //append to the combo box
                $('#cbxSelectVehicle').append(option);
            }
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});

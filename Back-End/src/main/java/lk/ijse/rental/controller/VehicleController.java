package lk.ijse.rental.controller;

import lk.ijse.rental.dto.VehicleDTO;
import lk.ijse.rental.service.VehicleService;
import lk.ijse.rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/vehicle")
@CrossOrigin
public class VehicleController {

    @Autowired
    VehicleService service;

    @GetMapping(path = "/loadAll")
    public ResponseUtil getAllVehicles() {
        ArrayList<VehicleDTO> allVehicles = service.loadAllVehicles();
        return new ResponseUtil("200", "All Vehicles Loaded", allVehicles);
    }

    @GetMapping(path = "/filter")
    public ResponseUtil searchVehiclesByFilterSelection(String type, String make, int passengers, String fuelType, String transmission) {
        ArrayList<VehicleDTO> allVehicles = service.findAllByFilters(type, make, passengers, fuelType, transmission);
        System.out.println(allVehicles);
        return new ResponseUtil("200", "Matching Vehicles Loaded", allVehicles);
    }

    @GetMapping(path = "/byModel")
    public ResponseUtil searchVehicleByModel(String model) {
        VehicleDTO vehicle = service.findByVehicleModel(model);
        return new ResponseUtil("200","Vehicle found.",vehicle);
    }

    @GetMapping(path = "/available")
    public Long getAvailableCount(String model, boolean reserved) {
        return service.countAvailableOfModel(model, reserved);
    }

    @GetMapping(path = "/search")
    public ResponseUtil searchVehicleById(String registrationNo) {
        VehicleDTO vehicleDTO = service.searchVehicle(registrationNo);
        return new ResponseUtil("200","Vehicle Found.",vehicleDTO);
    }
}

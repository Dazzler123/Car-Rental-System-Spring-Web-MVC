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

    @GetMapping
    public ResponseUtil findAllByFilterSelection(String type, String make, int passengers, String fuelType, String transmission) {
        ArrayList<VehicleDTO> allVehicles = service.findAllByFilters(type, make, passengers, fuelType, transmission);
        return new ResponseUtil("200", "Matching Vehicles Loaded", allVehicles);
    }
}

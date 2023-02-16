package lk.ijse.rental.controller;

import lk.ijse.rental.dto.VehicleDTO;
import lk.ijse.rental.service.VehicleService;
import lk.ijse.rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/vehicle")
@CrossOrigin
public class VehicleController {

    @Autowired
    VehicleService service;

    @GetMapping
    public ResponseUtil getAllVehicles() {
        ArrayList<VehicleDTO> allVehicles = service.loadAllVehicles();
        return new ResponseUtil("200", "All Vehicles Loaded", allVehicles);
    }
}

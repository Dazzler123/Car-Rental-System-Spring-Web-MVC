package lk.ijse.rental.controller;

import lk.ijse.rental.dto.MaintenanceDTO;
import lk.ijse.rental.service.MaintenanceService;
import lk.ijse.rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/maintenance")
@CrossOrigin
public class MaintenanceController {

    @Autowired
    MaintenanceService service;

    @PostMapping
    public ResponseUtil addToMaintenance(MaintenanceDTO dto) {
        service.recordVehicle(dto);
        return new ResponseUtil("200", "Vehicle added to maintenance.", null);
    }

    @GetMapping
    public ResponseUtil getAllVehicles() {
        ArrayList<MaintenanceDTO> vehicles = service.loadAllVehicles();
        return new ResponseUtil("200", "All Vehicles loaded.", vehicles);
    }

    @DeleteMapping
    public ResponseUtil removeVehicle(String vehicleId) {
        service.deleteVehicle(vehicleId);
        return new ResponseUtil("200","Vehicle removed from list.",null);
    }

}

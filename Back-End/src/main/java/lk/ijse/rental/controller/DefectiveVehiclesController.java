package lk.ijse.rental.controller;

import lk.ijse.rental.dto.DefectiveVehiclesDTO;
import lk.ijse.rental.service.DefectiveVehiclesService;
import lk.ijse.rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/defective")
@CrossOrigin
public class DefectiveVehiclesController {

    @Autowired
    DefectiveVehiclesService service;

    @PostMapping
    public ResponseUtil addToDefectiveList(DefectiveVehiclesDTO dto) {
        service.saveVehicle(dto);
        return new ResponseUtil("200", "Vehicle marked as defective.", null);
    }

    @GetMapping
    public ResponseUtil getAllVehicles() {
        ArrayList<DefectiveVehiclesDTO> vehicles = service.loadAllVehicles();
        return new ResponseUtil("200", "All Vehicles loaded.", vehicles);
    }

    @DeleteMapping
    public ResponseUtil removeVehicle(String vehicleId) {
        service.deleteVehicle(vehicleId);
        return new ResponseUtil("200", "Vehicle removed from list.", null);
    }
}

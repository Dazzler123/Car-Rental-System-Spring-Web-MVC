package lk.ijse.rental.controller;

import lk.ijse.rental.dto.MaintenanceDTO;
import lk.ijse.rental.service.MaintenanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/maintenance")
@CrossOrigin
public class MaintenanceController {

    @Autowired
    MaintenanceService service;

    @PostMapping
    public String addToMaintenance(MaintenanceDTO dto) {
        service.recordVehicle(dto);
        return "Vehicle added to maintenance. This will not be available until maintenance process is" +
                " completed and returned";
    }

}

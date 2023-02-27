package lk.ijse.rental.controller;

import lk.ijse.rental.dto.DriverDTO;
import lk.ijse.rental.service.DriverService;
import lk.ijse.rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/driver")
@CrossOrigin
public class DriverController {

    @Autowired
    DriverService service;

    @GetMapping
    public ResponseUtil getAllNonOccupied(boolean occupied) {
        ArrayList<DriverDTO> drivers = service.getAllNonOccupied(occupied);
        return new ResponseUtil("200", "All non-occupied drivers loaded.", drivers);
    }

    @GetMapping("/search")
    public ResponseUtil searchDriverByNic(String nic) {
        return new ResponseUtil("200", "Driver found", service.searchDriverById(nic));
    }

    @PutMapping
    public ResponseUtil updateDriverDetails(@RequestBody DriverDTO dto) {
        service.updateDriver(dto);
        return new ResponseUtil("200", "Driver details updated.", null);
    }
}

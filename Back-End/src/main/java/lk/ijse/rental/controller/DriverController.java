package lk.ijse.rental.controller;

import lk.ijse.rental.dto.DriverDTO;
import lk.ijse.rental.service.DriverService;
import lk.ijse.rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/driver")
@CrossOrigin
public class DriverController {

    @Autowired
    DriverService service;

    @GetMapping()
    public ResponseUtil getAllNonOccupied(boolean occupied) {
        ArrayList<DriverDTO> drivers = service.getAllNonOccupied(occupied);
        return new ResponseUtil("200","All non-occupied drivers loaded.", drivers);
    }
}

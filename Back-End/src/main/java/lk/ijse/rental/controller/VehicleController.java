package lk.ijse.rental.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/vehicle")
@CrossOrigin
public class VehicleController {

    @GetMapping
    public void getAllVehicles() {

    }
}

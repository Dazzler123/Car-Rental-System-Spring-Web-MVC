package lk.ijse.rental.controller;

import lk.ijse.rental.dto.RentDTO;
import lk.ijse.rental.service.RentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rent")
@CrossOrigin
public class RentController {

    @Autowired
    RentService service;

    @PostMapping
    public String placeRent(RentDTO dto) {
        return service.saveRent(dto);
    }
}

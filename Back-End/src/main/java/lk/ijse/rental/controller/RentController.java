package lk.ijse.rental.controller;

import lk.ijse.rental.dto.RentDTO;
import lk.ijse.rental.service.RentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("rent")
@CrossOrigin
public class RentController {

    @Autowired
    RentService service;

    @PostMapping("/save")
    public String placeRent(RentDTO dto) {
        return service.saveRent(dto);
    }
}

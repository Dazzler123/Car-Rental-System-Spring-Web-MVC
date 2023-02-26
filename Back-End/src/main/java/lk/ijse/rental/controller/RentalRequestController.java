package lk.ijse.rental.controller;

import lk.ijse.rental.dto.RentalRequestDTO;
import lk.ijse.rental.service.RentalRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rentalRequest")
@CrossOrigin
public class RentalRequestController {

    @Autowired
    RentalRequestService service;

    @PostMapping
    public String placeRentalRequest(RentalRequestDTO dto) {
        service.saveRequest(dto);
        return "Rental request placed successfully.";
    }
}

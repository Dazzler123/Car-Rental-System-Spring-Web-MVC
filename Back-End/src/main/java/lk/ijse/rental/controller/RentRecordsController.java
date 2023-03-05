package lk.ijse.rental.controller;

import lk.ijse.rental.dto.RentRecordsDTO;
import lk.ijse.rental.service.RentRecordsService;
import lk.ijse.rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rentRecords")
@CrossOrigin
public class RentRecordsController {

    @Autowired
    RentRecordsService service;

    @PostMapping
    public ResponseUtil saveRentDetails(RentRecordsDTO dto) {
        System.out.println(dto);
        service.saveRent(dto);
        return new ResponseUtil("200", "Rent details saved.", null);
    }

    @GetMapping("/loadAll")
    public ResponseUtil loadAllRecords() {
        return new ResponseUtil("200", "All records loaded", service.getAllRecords());
    }
}

package lk.ijse.rental.controller;

import lk.ijse.rental.dto.RentalRequestDTO;
import lk.ijse.rental.service.RentalRequestService;
import lk.ijse.rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rentalRequest")
@CrossOrigin
public class RentalRequestController {

    @Autowired
    RentalRequestService service;

    @PostMapping
    public ResponseUtil placeRentalRequest(RentalRequestDTO dto) {
        service.saveRequest(dto);
        return new ResponseUtil("200","Rental request sent successfully. Please check your" +
                " Rental Responses page for feedbacks.",null);
    }

    @GetMapping("/loadAll")
    public ResponseUtil loadAllRequests() {
        return new ResponseUtil("200", "All rental requests loaded.", service.getAllRentalRequests());
    }

    @GetMapping("/search")
    public ResponseUtil getRentalRequestDetails(int requestId) {
        return new ResponseUtil("200", "Rental request details found",
                service.searchRentalDetails(requestId));
    }

    @PutMapping
    public ResponseUtil updateRequestDetails(@RequestBody RentalRequestDTO dto) {
        service.updateDetails(dto);
        return new ResponseUtil("200", "Details updated.", null);
    }
}

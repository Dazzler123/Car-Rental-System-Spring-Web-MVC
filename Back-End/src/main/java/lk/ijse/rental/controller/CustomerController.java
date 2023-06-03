package lk.ijse.rental.controller;

import lk.ijse.rental.dto.CustomerDTO;
import lk.ijse.rental.service.CustomerService;
import lk.ijse.rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;

@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    CustomerService service;

    @PostMapping(path = "/register")
    public ResponseUtil saveCustomer(CustomerDTO dto) {
        service.saveCustomer(dto);
        return new ResponseUtil("200","Customer Saved successfully.",null);
    }

    @GetMapping(path = "/verify")
    public ResponseUtil verifyCustomer(String username, String password) {
        return new ResponseUtil("200", "Customer Exists.", service.verifyCustomer(username, password));
    }

    @GetMapping(path = "/loadAll")
    public ResponseUtil loadAllCustomers() {
        ArrayList<CustomerDTO> customers = service.loadAll();
        return new ResponseUtil("200", "All Customer Loaded.", customers);
    }

    @GetMapping(path = "/search")
    public ResponseUtil searchCustomerById(String nic) {
        return new ResponseUtil("200", "Customer Found with matching NIC", service.searchCustomer(nic));
    }

    @PutMapping
    public String updateCustomer(@RequestBody CustomerDTO dto) {
        service.updateCustomer(dto);
        return "Customer details updated successfully.";
    }

    @DeleteMapping(params = "nic")
    public String deleteCustomer(String nic) {
        service.deleteCustomer(nic);
        return "Customer deleted successfully.";
    }
}

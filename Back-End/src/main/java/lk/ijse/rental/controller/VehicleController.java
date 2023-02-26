package lk.ijse.rental.controller;

import lk.ijse.rental.dto.VehicleDTO;
import lk.ijse.rental.service.VehicleService;
import lk.ijse.rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/vehicle")
@CrossOrigin
public class VehicleController {

    @Autowired
    VehicleService service;

    @GetMapping(path = "/loadAll")
    public ResponseUtil getAllVehicles() {
        ArrayList<VehicleDTO> allVehicles = service.loadAllVehicles();
        return new ResponseUtil("200", "All Vehicles Loaded", allVehicles);
    }

    @GetMapping(path = "/filter")
    public ResponseUtil searchVehiclesByFilterSelection(String type, String make, int passengers, String fuelType,
                                                        String transmission) {
        ArrayList<VehicleDTO> allVehicles = service.findAllByFilters(type, make, passengers, fuelType, transmission);
        System.out.println(allVehicles);
        return new ResponseUtil("200", "Matching Vehicles Loaded", allVehicles);
    }

    @GetMapping(path = "/byModel")
    public ResponseUtil searchVehicleByModel(String model, boolean reserved) {
        ArrayList<VehicleDTO> vehicles = service.findByVehicleModel(model,reserved);
        return new ResponseUtil("200", "Vehicle found.", vehicles);
    }

    @GetMapping(path = "/available")
    public Long getAvailableCount(String model, boolean reserved) {
        return service.countAvailableOfModel(model, reserved);
    }

    @GetMapping(path = "/search")
    public ResponseUtil searchVehicleById(String registrationNo) {
        VehicleDTO vehicleDTO = service.searchVehicle(registrationNo);
        return new ResponseUtil("200", "Vehicle Found.", vehicleDTO);
    }

    @PostMapping
    public ResponseUtil addNewVehicle(VehicleDTO dto) {
        return new ResponseUtil("200", "Vehicle Saved Successfully.", service.saveVehicle(dto));
    }

    @PutMapping
    public ResponseUtil updateVehicleDetails(@RequestBody VehicleDTO dto) {
        return new ResponseUtil("200", "Vehicle details updated successfully.", service.updateVehicle(dto));
    }

    @DeleteMapping(params = "registrationNo")
    public String deleteVehicleDetails(String registrationNo) {
        service.deleteVehicle(registrationNo);
        return "Vehicle deleted successfully.";
    }
}

package lk.ijse.rental.service.impl;

import lk.ijse.rental.dto.VehicleDTO;
import lk.ijse.rental.entity.Vehicle;
import lk.ijse.rental.repo.VehicleRepo;
import lk.ijse.rental.service.VehicleService;
import lk.ijse.rental.util.ResponseUtil;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;

@Service
@Transactional
public class VehicleServiceImpl implements VehicleService {

    @Autowired
    VehicleRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public ArrayList<VehicleDTO> loadAllVehicles() {
        return mapper.map(repo.findAll(), new TypeToken<ArrayList<VehicleDTO>>() {
        }.getType());
    }

    @Override
    public ArrayList<VehicleDTO> findAllByFilters(String type, String make, int passengers, String fuelType, String transmission) {
        if (repo.findVehiclesByTypeAndMakeAndPassengersAndFuelTypeAndTransmission(type, make, passengers, fuelType, transmission) == null) {
            System.out.println("error");
            throw new RuntimeException("No Matching Vehicles found!");
        } else {
            System.out.println("good");
            return mapper.map(
                    repo.findVehiclesByTypeAndMakeAndPassengersAndFuelTypeAndTransmission(
                            type, make, passengers, fuelType, transmission),
                    new TypeToken<ArrayList<VehicleDTO>>() {
                    }.getType());
        }
    }

    @Override
    public ArrayList<VehicleDTO> findByVehicleModel(String model, boolean reserved) {
        return mapper.map(repo.findVehicleByModelAndReserved(model,reserved), new TypeToken<ArrayList<VehicleDTO>>() {
        }.getType());
    }

    @Override
    public Long countAvailableOfModel(String model, boolean reserved) {
        return repo.countByModelAndReserved(model, reserved);
    }

    @Override
    public VehicleDTO searchVehicle(String registrationNo) {
        if (!repo.existsById(registrationNo)) {
            throw new RuntimeException("No vehicle found with matching Registration Number.");
        } else {
            return mapper.map(repo.findById(registrationNo), VehicleDTO.class);
        }
    }

    @Override
    public String saveVehicle(VehicleDTO dto) {
        if (repo.existsById(dto.getRegistrationNo())) {
            throw new RuntimeException("Vehicle already exists!");
        } else {
            Vehicle vehicle = mapper.map(dto, Vehicle.class);
            repo.save(vehicle);
            return "Vehicle Saved Successfully.";
        }
    }

    @Override
    public String updateVehicle(VehicleDTO dto) {
        if (!repo.existsById(dto.getRegistrationNo())) {
            throw new RuntimeException("Vehicle not found.");
        } else {
            Vehicle vehicle = mapper.map(dto, Vehicle.class);
            repo.save(vehicle);
            return "Vehicle Updated Successfully.";
        }
    }

    @Override
    public void deleteVehicle(String registrationNo) {
        if (!repo.existsById(registrationNo)) {
            throw new RuntimeException("Vehicle not found.");
        } else {
            repo.deleteById(registrationNo);
        }
    }
}

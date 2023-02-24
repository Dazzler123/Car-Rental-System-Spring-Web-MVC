package lk.ijse.rental.service.impl;

import lk.ijse.rental.dto.VehicleDTO;
import lk.ijse.rental.repo.VehicleRepo;
import lk.ijse.rental.service.VehicleService;
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
    public VehicleDTO findByVehicleModel(String model) {
        return mapper.map(repo.findVehicleByModel(model), VehicleDTO.class);
    }

    @Override
    public Long countAvailableOfModel(String model, boolean reserved) {
        return repo.countByModelAndReserved(model, reserved);
    }
}

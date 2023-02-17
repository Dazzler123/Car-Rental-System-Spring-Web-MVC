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
    public ArrayList<VehicleDTO> findAllByFilters(String type, String make, int passenger_count, String fuel_type, String transmission) {
//        return mapper.map(
//                repo.findByTypeAndMakeAndPassenger_countAndFuel_typeAndTransmission(type, make, passenger_count,
//                        fuel_type, transmission), new TypeToken<ArrayList<VehicleDTO>>() {
//                }.getType());

        return new ArrayList<>();
    }
}

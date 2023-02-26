package lk.ijse.rental.service.impl;

import lk.ijse.rental.dto.DriverDTO;
import lk.ijse.rental.dto.VehicleDTO;
import lk.ijse.rental.repo.DriverRepo;
import lk.ijse.rental.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {

    @Autowired
    DriverRepo repo;

    @Autowired
    ModelMapper mapper;


    @Override
    public ArrayList<DriverDTO> getAllNonOccupied(boolean occupied) {
        return mapper.map(repo.findDriverByOccupied(occupied), new TypeToken<ArrayList<DriverDTO>>() {
        }.getType());
    }
}

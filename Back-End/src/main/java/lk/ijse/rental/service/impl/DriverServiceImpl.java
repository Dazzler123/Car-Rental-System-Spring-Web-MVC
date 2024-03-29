package lk.ijse.rental.service.impl;

import lk.ijse.rental.dto.DriverDTO;
import lk.ijse.rental.entity.Driver;
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

    @Override
    public DriverDTO searchDriverById(String nic) {
        if (!repo.existsById(nic)) {
            throw new RuntimeException("Driver not found.");
        } else {
            return mapper.map(repo.findById(nic), DriverDTO.class);
        }
    }

    @Override
    public void updateDriver(DriverDTO dto) {
        Driver driver = mapper.map(dto, Driver.class);
        repo.save(driver);
    }

    @Override
    public boolean findIfExists(String nic) {
        return repo.existsById(nic);
    }
}

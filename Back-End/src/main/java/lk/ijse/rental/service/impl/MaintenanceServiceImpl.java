package lk.ijse.rental.service.impl;

import lk.ijse.rental.dto.MaintenanceDTO;
import lk.ijse.rental.dto.VehicleDTO;
import lk.ijse.rental.entity.Maintenance;
import lk.ijse.rental.repo.MaintenanceRepo;
import lk.ijse.rental.service.MaintenanceService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;

@Service
@Transactional
public class MaintenanceServiceImpl implements MaintenanceService {

    @Autowired
    MaintenanceRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void recordVehicle(MaintenanceDTO dto) {
        if (repo.existsById(dto.getVehicleId())) {
            throw new RuntimeException("Vehicle already added to maintenance.");
        } else {
            Maintenance vehicle = mapper.map(dto, Maintenance.class);
            repo.save(vehicle);
        }
    }

    @Override
    public ArrayList<MaintenanceDTO> loadAllVehicles() {
        return mapper.map(repo.findAll(), new TypeToken<ArrayList<MaintenanceDTO>>() {
        }.getType());
    }

    @Override
    public void deleteVehicle(String vehicleId) {
        repo.deleteById(vehicleId);
    }
}

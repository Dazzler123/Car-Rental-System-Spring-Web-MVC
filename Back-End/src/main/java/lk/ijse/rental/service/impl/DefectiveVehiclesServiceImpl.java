package lk.ijse.rental.service.impl;

import lk.ijse.rental.dto.DefectiveVehiclesDTO;
import lk.ijse.rental.dto.VehicleDTO;
import lk.ijse.rental.entity.Defective_Vehicles;
import lk.ijse.rental.repo.DefectiveVehiclesRepo;
import lk.ijse.rental.service.DefectiveVehiclesService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;

@Service
@Transactional
public class DefectiveVehiclesServiceImpl implements DefectiveVehiclesService {

    @Autowired
    DefectiveVehiclesRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveVehicle(DefectiveVehiclesDTO dto) {
        if (repo.existsById(dto.getVehicleId())) {
            throw new RuntimeException("Vehicle already added to defective list.");
        } else {
            Defective_Vehicles vehicle = mapper.map(dto, Defective_Vehicles.class);
            repo.save(vehicle);
        }
    }

    @Override
    public ArrayList<DefectiveVehiclesDTO> loadAllVehicles() {
        return mapper.map(repo.findAll(), new TypeToken<ArrayList<DefectiveVehiclesDTO>>() {
        }.getType());
    }

    @Override
    public void deleteVehicle(String vehicleId) {
        repo.deleteById(vehicleId);
    }
}

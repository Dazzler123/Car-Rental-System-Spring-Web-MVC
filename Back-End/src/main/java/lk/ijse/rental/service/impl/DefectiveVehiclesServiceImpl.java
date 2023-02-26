package lk.ijse.rental.service.impl;

import lk.ijse.rental.dto.DefectiveVehiclesDTO;
import lk.ijse.rental.entity.Defective_Vehicles;
import lk.ijse.rental.repo.DefectiveVehiclesRepo;
import lk.ijse.rental.service.DefectiveVehiclesService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class DefectiveVehiclesServiceImpl implements DefectiveVehiclesService {

    @Autowired
    DefectiveVehiclesRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveVehicle(DefectiveVehiclesDTO dto) {
        Defective_Vehicles vehicle = mapper.map(dto, Defective_Vehicles.class);
        repo.save(vehicle);
    }
}

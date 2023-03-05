package lk.ijse.rental.service.impl;

import lk.ijse.rental.dto.RentRecordsDTO;
import lk.ijse.rental.dto.RentalRequestDTO;
import lk.ijse.rental.entity.Rent_Records;
import lk.ijse.rental.repo.RentRecordsRepo;
import lk.ijse.rental.service.RentRecordsService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;

@Service
@Transactional
public class RentRecordsServiceImpl implements RentRecordsService {

    @Autowired
    RentRecordsRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveRent(RentRecordsDTO dto) {
        Rent_Records record = mapper.map(dto, Rent_Records.class);
        repo.save(record);
    }

    @Override
    public ArrayList<RentRecordsDTO> getAllRecords() {
        return mapper.map(repo.findAll(), new TypeToken<ArrayList<RentRecordsDTO>>() {
        }.getType());
    }
}

package lk.ijse.rental.service.impl;

import lk.ijse.rental.dto.RentRecordsDTO;
import lk.ijse.rental.repo.RentRecordsRepo;
import lk.ijse.rental.service.RentRecordsService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class RentRecordsServiceImpl implements RentRecordsService {

    @Autowired
    RentRecordsRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveRent(RentRecordsDTO dto) {

    }
}

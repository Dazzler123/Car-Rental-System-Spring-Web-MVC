package lk.ijse.rental.service.impl;

import lk.ijse.rental.dto.RentDTO;
import lk.ijse.rental.service.RentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

public class RentServiceImpl implements RentService {
    @Autowired
    RentRepo repo;

    @Autowired
    ModelMapper mapper;
    @Override
    public void saveRent(RentDTO rent) {

    }
}

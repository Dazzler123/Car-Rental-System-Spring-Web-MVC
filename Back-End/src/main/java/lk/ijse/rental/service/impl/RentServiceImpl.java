package lk.ijse.rental.service.impl;

import lk.ijse.rental.dto.RentDTO;
import lk.ijse.rental.entity.Rent;
import lk.ijse.rental.repo.RentRepo;
import lk.ijse.rental.service.RentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class RentServiceImpl implements RentService {
    @Autowired
    RentRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public String saveRent(RentDTO rent) {
        System.out.println(rent);
        Rent map = mapper.map(rent, Rent.class);
        repo.save(map);

        return "Rent placed successfully.";
    }
}

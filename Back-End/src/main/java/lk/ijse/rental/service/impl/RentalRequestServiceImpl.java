package lk.ijse.rental.service.impl;

import lk.ijse.rental.dto.RentalRequestDTO;
import lk.ijse.rental.entity.Rental_Request;
import lk.ijse.rental.repo.RentalRequestRepo;
import lk.ijse.rental.service.RentalRequestService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class RentalRequestServiceImpl implements RentalRequestService {

    @Autowired
    RentalRequestRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveRequest(RentalRequestDTO dto) {
        if(repo.existsById(String.valueOf(dto.getRequestId()))){
            throw new RuntimeException("Rental request already exists!");
        } else {
            Rental_Request request = mapper.map(dto, Rental_Request.class);
            repo.save(request);
        }
    }
}

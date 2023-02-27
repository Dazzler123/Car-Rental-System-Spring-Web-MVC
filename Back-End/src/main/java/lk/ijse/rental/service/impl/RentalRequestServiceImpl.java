package lk.ijse.rental.service.impl;

import lk.ijse.rental.dto.RentalRequestDTO;
import lk.ijse.rental.entity.Rental_Request;
import lk.ijse.rental.repo.RentalRequestRepo;
import lk.ijse.rental.service.RentalRequestService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;

@Service
@Transactional
public class RentalRequestServiceImpl implements RentalRequestService {

    @Autowired
    RentalRequestRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveRequest(RentalRequestDTO dto) {
//        if(repo.existsById(String.valueOf(dto.getRequestId()))){
//            throw new RuntimeException("Rental request already exists!");
//        } else {
//
//        }
        Rental_Request request = mapper.map(dto, Rental_Request.class);
        repo.save(request);
    }

    @Override
    public ArrayList<RentalRequestDTO> getAllRentalRequests() {
        return mapper.map(repo.findAll(), new TypeToken<ArrayList<RentalRequestDTO>>() {
        }.getType());
    }

    @Override
    public RentalRequestDTO searchRentalDetails(int requestId) {
        return mapper.map(repo.findRental_RequestByRequestId(requestId), RentalRequestDTO.class);
    }
}

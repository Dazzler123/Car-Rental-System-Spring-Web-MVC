//package lk.ijse.rental.service.impl;
//
//import lk.ijse.rental.dto.RatesDTO;
//import lk.ijse.rental.repo.RatesRepo;
//import lk.ijse.rental.service.RatesService;
//import org.modelmapper.ModelMapper;
//import org.modelmapper.TypeToken;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import javax.transaction.Transactional;
//import java.util.ArrayList;
//
//@Service
//@Transactional
//public class RatesServiceImpl implements RatesService {
//
//    @Autowired
//    RatesRepo repo;
//
//    @Autowired
//    ModelMapper mapper;
//
//    @Override
//    public RatesDTO searchRateById(String id) {
//        if(!repo.existsById(id)) {
//            throw new RuntimeException("No Vehicle Rate Found!");
//        } else {
//            return mapper.map(repo.findById(id), RatesDTO.class);
//        }
//    }
//}

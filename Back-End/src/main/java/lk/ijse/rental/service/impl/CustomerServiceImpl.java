package lk.ijse.rental.service.impl;

import lk.ijse.rental.dto.CustomerDTO;
import lk.ijse.rental.service.CustomerService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {
    @Override
    public void saveCustomer(CustomerDTO dto) {

    }
}

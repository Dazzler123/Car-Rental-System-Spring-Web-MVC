package lk.ijse.rental.service.impl;

import lk.ijse.rental.dto.CustomerDTO;
import lk.ijse.rental.entity.Customer;
import lk.ijse.rental.repo.CustomerRepo;
import lk.ijse.rental.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveCustomer(CustomerDTO dto) {
        if (repo.existsById(dto.getNic())) {
            throw new RuntimeException("Customer Already Exists");
        } else {
            Customer customer = mapper.map(dto, Customer.class);
            repo.save(customer);
        }
    }

    @Override
    public CustomerDTO verifyCustomer(String username, String password) {
        if (repo.findCustomerByUsernameAndPassword(username, password) == null) {
            throw new RuntimeException("No Customer found with matching Username and Password!");
        }
        Customer customer = repo.findCustomerByUsernameAndPassword(username, password);
        return mapper.map(customer, CustomerDTO.class);
    }

    @Override
    public CustomerDTO searchCustomer(String nic) {
        if (!repo.existsById(nic)) {
            throw new RuntimeException("No Customer found with matching NIC.");
        } else {
            return mapper.map(repo.findCustomerByNic(nic), CustomerDTO.class);
        }
    }

    @Override
    public void updateCustomer(CustomerDTO dto) {
        if(!repo.existsById(dto.getNic())) {
            throw new RuntimeException("No Customer found with matching NIC.");
        } else {
            Customer customer = mapper.map(dto, Customer.class);
            repo.save(customer);
        }
    }
}

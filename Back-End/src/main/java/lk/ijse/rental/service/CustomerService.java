package lk.ijse.rental.service;

import lk.ijse.rental.dto.CustomerDTO;

public interface CustomerService {
    public void saveCustomer(CustomerDTO dto);

    public CustomerDTO verifyCustomer(String username, String password);
}

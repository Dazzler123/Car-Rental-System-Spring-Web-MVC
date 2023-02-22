package lk.ijse.rental.service;

import lk.ijse.rental.dto.CustomerDTO;

import java.util.ArrayList;

public interface CustomerService {
    public ArrayList<CustomerDTO> loadAll();
    public void saveCustomer(CustomerDTO dto);

    public CustomerDTO verifyCustomer(String username, String password);

    public CustomerDTO searchCustomer(String nic);

    public void updateCustomer(CustomerDTO dto);

    public void deleteCustomer(String nic);
}

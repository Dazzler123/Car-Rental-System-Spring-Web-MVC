package lk.ijse.rental.repo;

import lk.ijse.rental.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepo extends JpaRepository<Customer, String> {
    public Customer findCustomerByUsernameAndPassword(String username, String password);

    public Customer findCustomerByNic(String nic);
}

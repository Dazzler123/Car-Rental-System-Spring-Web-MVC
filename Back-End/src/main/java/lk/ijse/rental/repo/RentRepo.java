package lk.ijse.rental.repo;

import lk.ijse.rental.entity.Rent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentRepo extends JpaRepository<Rent, String> {
}

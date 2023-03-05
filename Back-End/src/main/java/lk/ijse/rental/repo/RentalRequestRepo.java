package lk.ijse.rental.repo;

import lk.ijse.rental.entity.Rental_Request;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentalRequestRepo extends JpaRepository<Rental_Request, Integer> {
    Rental_Request findRental_RequestByRequestId(int requestId);
}

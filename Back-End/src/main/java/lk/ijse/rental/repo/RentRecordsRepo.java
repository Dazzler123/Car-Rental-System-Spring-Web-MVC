package lk.ijse.rental.repo;

import lk.ijse.rental.entity.Rent_Records;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentRecordsRepo extends JpaRepository<Rent_Records, String> {
}

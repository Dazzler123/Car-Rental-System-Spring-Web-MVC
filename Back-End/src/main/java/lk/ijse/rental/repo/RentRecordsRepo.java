package lk.ijse.rental.repo;

import lk.ijse.rental.entity.Rent_Records;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RentRecordsRepo extends JpaRepository<Rent_Records, String> {

    @Query(value = "SELECT * FROM rent_records WHERE date LIKE ?1", nativeQuery = true)
    List<Rent_Records> sortByDate(String date);
}

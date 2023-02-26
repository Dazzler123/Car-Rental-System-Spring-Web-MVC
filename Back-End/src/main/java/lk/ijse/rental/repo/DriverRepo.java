package lk.ijse.rental.repo;

import lk.ijse.rental.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DriverRepo extends JpaRepository<Driver, String> {
    List<Driver> findDriverByOccupied(boolean occupied);
}

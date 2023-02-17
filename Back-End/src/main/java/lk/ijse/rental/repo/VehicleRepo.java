package lk.ijse.rental.repo;

import lk.ijse.rental.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VehicleRepo extends JpaRepository<Vehicle, String> {
    List<Vehicle> findVehiclesByTypeAndMakeAndPassenger_countAndFuel_TypeAndTransmission(String type, String make,
                                                                                 int passengers, String fuel_type, String transmission);
}

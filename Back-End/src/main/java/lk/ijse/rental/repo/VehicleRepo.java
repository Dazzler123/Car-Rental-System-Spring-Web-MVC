package lk.ijse.rental.repo;

import lk.ijse.rental.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VehicleRepo extends JpaRepository<Vehicle, String> {
    List<Vehicle> findVehiclesByTypeAndMakeAndPassengersAndFuelTypeAndTransmission(String type, String make,
                                                                                 int passengers, String fuelType, String transmission);

    Vehicle findVehicleByModel(String model);
}

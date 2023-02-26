package lk.ijse.rental.repo;

import lk.ijse.rental.entity.Defective_Vehicles;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DefectiveVehiclesRepo extends JpaRepository<Defective_Vehicles, String> {
}

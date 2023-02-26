package lk.ijse.rental.repo;

import lk.ijse.rental.entity.Maintenance;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MaintenanceRepo extends JpaRepository<Maintenance, String> {
}

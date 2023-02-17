package lk.ijse.rental.repo;

import lk.ijse.rental.entity.Rates;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RatesRepo extends JpaRepository<Rates, String> {
}

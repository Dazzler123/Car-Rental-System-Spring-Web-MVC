import lk.ijse.rental.config.WebRootConfig;
import lk.ijse.rental.entity.Vehicle;
import lk.ijse.rental.repo.VehicleRepo;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.web.WebAppConfiguration;

import javax.transaction.Transactional;

import java.util.List;


@WebAppConfiguration
@ContextConfiguration(classes = {WebRootConfig.class})
@ExtendWith(SpringExtension.class)
@Transactional
class CustomerRepoTest {

    @Autowired
    VehicleRepo repo;

    @Test
    public void testOne() {
//        List<Vehicle> byTypeAndMakeAndTransmission =
//                repo.findVehiclesByTypeAndMakeAndPassenger_countAndFuel_TypeAndTransmission("General Car",
//                "Dihatsu",4,"Petrol","5 Speed");
//
//        System.out.println(byTypeAndMakeAndTransmission);


    }

}

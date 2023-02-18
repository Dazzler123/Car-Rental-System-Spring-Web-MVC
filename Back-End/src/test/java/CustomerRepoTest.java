import lk.ijse.rental.config.WebRootConfig;
import lk.ijse.rental.entity.Customer;
import lk.ijse.rental.entity.Vehicle;
import lk.ijse.rental.repo.CustomerRepo;
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

    @Autowired
    CustomerRepo repo2;

    @Test
    public void testOne() {
//        List<Vehicle> byTypeAndMakeAndTransmission =
//                repo.findVehiclesByTypeAndMakeAndPassengersAndFuelTypeAndTransmission("Premium Car",
//                "Mercedes Benz",5,"Diesel","5 Speed Dual Clutch");
//
//        System.out.println(byTypeAndMakeAndTransmission);

        Customer dazzler7tec = repo2.findCustomerByUsernameAndPassword("dazzler7tec", "45459093");
        System.out.println(dazzler7tec);


    }

}

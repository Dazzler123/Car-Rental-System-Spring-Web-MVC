import lk.ijse.rental.config.WebRootConfig;
import lk.ijse.rental.entity.Customer;
import lk.ijse.rental.entity.Rent_Records;
import lk.ijse.rental.entity.Vehicle;
import lk.ijse.rental.repo.*;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.web.WebAppConfiguration;

import javax.transaction.Transactional;

import java.util.List;
import java.util.Optional;


@WebAppConfiguration
@ContextConfiguration(classes = {WebRootConfig.class})
@ExtendWith(SpringExtension.class)
@Transactional
class CustomerRepoTest {

    @Autowired
    VehicleRepo repo;

    @Autowired
    CustomerRepo repo2;

    @Autowired
    RentalRequestRepo repo3;

    @Autowired
    RentRecordsRepo repo4;


    @Test
    public void testOne() {
//        List<Vehicle> byTypeAndMakeAndTransmission =
//                repo.findVehiclesByTypeAndMakeAndPassengersAndFuelTypeAndTransmission("Premium Car",
//                "Mercedes Benz",5,"Diesel","5 Speed Dual Clutch");
//
//        System.out.println(byTypeAndMakeAndTransmission);

//        Customer dazzler7tec = repo2.findCustomerByUsernameAndPassword("dazzler7tec", "45459093");
//        System.out.println(dazzler7tec);

//        Customer customer = repo2.findCustomerByNic("200334000948");
//        System.out.println(customer);
//
//        Long suzuki_wagon_r_hybrid = repo.countByModelAndReserved("Mercedes Benz CLA 200 AMG", false);
//        System.out.println(suzuki_wagon_r_hybrid);
//        int id = 4;
//        System.out.println(repo3.findRental_RequestByRequestId(5));

//        List<Rent_Records> customerUsingName = repo4.sortByDate("%-3-%");
//        System.out.println(customerUsingName);

    }

}

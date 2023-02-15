package lk.ijse.Car_Rental_System.config;

import lk.ijse.Car_Rental_System.controller.CustomerController;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@ComponentScan(basePackageClasses = {CustomerController.class})
@EnableWebMvc
public class WebAppConfig {
}

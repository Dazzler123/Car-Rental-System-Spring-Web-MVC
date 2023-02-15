package lk.ijse.Car_Rental_System.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class WebRootConfig {
    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
}

package lk.ijse.rental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class VehicleDTO {
    private String registration_no;
    private String make;
    private String model;
    private int yom;
    private String type; //general, premium, luxury
    private String fuel_type;
    private String color;
    private String transmission;
    private String mileage;
    private int passenger_count;
    private String description;  //paragraph on the card
    private boolean reserved;  //is reserved or not
    private boolean images;  // does it hv images uploaded or not
    private double daily_rate;
    private double km_daily;
    private double monthly_rate;
    private double km_monthly;
    private double extra_km_rate;
}

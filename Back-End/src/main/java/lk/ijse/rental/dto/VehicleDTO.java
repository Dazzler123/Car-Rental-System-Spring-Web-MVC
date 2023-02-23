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
    private String registrationNo;
    private String make;
    private String model;
    private int yom;
    private String type; //general, premium, luxury
    private String fuelType;
    private String color;
    private String transmission;
    private String mileage;
    private int passengers;
    private String description;  //paragraph on the card
    private boolean reserved;  //is reserved or not
    private double dailyRate;
    private double kmDaily;
    private double monthlyRate;
    private double kmMonthly;
    private double extraKmRate;
}

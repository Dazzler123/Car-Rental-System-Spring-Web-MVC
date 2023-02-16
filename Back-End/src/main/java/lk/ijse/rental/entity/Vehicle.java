package lk.ijse.rental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class Vehicle {
    @Id
    private String registration_no;
    private String make;
    private String model;
    private int yom;
    private String type;
    private String fuel_type;
    private String color;
    private String transmission;
    private String mileage;
    private int passenger_count;
    private String description;
    private boolean reserved;
    private boolean images;
}

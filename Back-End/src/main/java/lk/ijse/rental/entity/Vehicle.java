package lk.ijse.rental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class Vehicle {
    @Id
    private String registrationNo;
    private String make;
    private String model;
    private int yom;
    private String type;
    private String fuelType;
    private String color;
    private String transmission;
    private String mileage;
    private int passengers;
    private String description;
    private boolean reserved;
    private double dailyRate;
    private double kmDaily;
    private double monthlyRate;
    private double kmMonthly;
    private double extraKmRate;

    @OneToMany(mappedBy = "registrationNo", targetEntity = Rent.class)
    private List<Rent> rentList = new ArrayList<>();
}

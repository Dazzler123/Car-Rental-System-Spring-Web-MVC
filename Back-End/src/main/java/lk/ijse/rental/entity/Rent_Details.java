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
public class Rent_Details {
    @Id
    private String id;
    private String pickUpDate;
    private String pickUpTime;
    private boolean bankImg;
    private double damageWaiver;  //saves 0 when placing the rent and after returning the car, if an damage was noticed
    //that amount charged will be updated here
    private String returnDate;
    private String returnTime;
    private String rentDuration;  //how many days rented

    private String driver;  //driver nic
}

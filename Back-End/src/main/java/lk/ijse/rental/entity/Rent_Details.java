package lk.ijse.rental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class Rent_Details {
    @Id
    @GeneratedValue
    private int id;
    private String pickUpDate;
    private String pickUpTime;
    private boolean bankImg;
    private double damageWaiver;
    private String returnDate;
    private String returnTime;
    private String rentDuration;

    @ManyToOne(cascade = CascadeType.ALL, targetEntity = Driver.class)
    @JoinColumn(name = "nic")
    private Driver nic;

    @ManyToOne(targetEntity = Rent.class)
    @JoinColumn(name = "rentId",referencedColumnName = "rentId")
    private Rent rents;
}

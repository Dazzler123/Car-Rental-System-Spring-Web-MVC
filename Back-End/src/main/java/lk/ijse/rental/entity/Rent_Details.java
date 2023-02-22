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
    private String id;
    private String pickUpDate;
    private String pickUpTime;
    private boolean bankImg;
    private double damageWaiver;
    private String returnDate;
    private String returnTime;
    private String rentDuration;

    @ManyToOne(cascade = CascadeType.ALL, targetEntity = Vehicle.class)
    @JoinColumn(name = "nic")
    private Driver nic;

    @ManyToOne
    @JoinColumn(name = "oid",referencedColumnName = "oid")
    private Rent rents;

}

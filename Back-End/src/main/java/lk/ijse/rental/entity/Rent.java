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
public class Rent {
    @Id
    private String id;

    @ManyToOne(cascade = CascadeType.ALL, targetEntity = Customer.class)
    @JoinColumn(name = "nic")
    private Customer nic;

    @ManyToOne(cascade = CascadeType.ALL, targetEntity = Vehicle.class)
    @JoinColumn(name = "registrationNo")
    private Vehicle registrationNo;

    private String date;
    private String time;
}

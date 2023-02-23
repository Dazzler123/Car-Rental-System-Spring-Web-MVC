package lk.ijse.rental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class Rent {
    @Id
    private int rentId;

    @ManyToOne(cascade = CascadeType.ALL, targetEntity = Customer.class)
    @JoinColumn(name = "nic", updatable = false)
    private Customer nic;

    @ManyToOne(cascade = CascadeType.ALL, targetEntity = Vehicle.class)
    @JoinColumn(name = "registrationNo", updatable = false)
    private Vehicle registrationNo;

    private String date;
    private String time;

    @OneToMany(cascade = CascadeType.ALL, targetEntity = Rent_Details.class)
    @JoinColumn(name = "rd_fk", referencedColumnName = "rentId")
    private List<Rent_Details> rentDetails;
}

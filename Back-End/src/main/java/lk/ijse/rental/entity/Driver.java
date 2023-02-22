package lk.ijse.rental.entity;

import lk.ijse.rental.dto.RentDetailsDTO;
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
public class Driver {
    @Id
    private String nic;
    private String dlNo;
    private String name;
    private String address;
    private String contactNo;
    private boolean occupied;

    @OneToMany(mappedBy = "nic", targetEntity = Rent_Details.class)
    private List<Rent_Details> rentList = new ArrayList<>();
}

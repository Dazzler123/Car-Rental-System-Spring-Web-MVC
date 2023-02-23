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
public class Customer {
    @Id
    private String nic;
    private String dl_no;
    private String name;
    private String address;
    private String contact_no;
    private String email;
    private String gender;
    private String username;
    private String password;

    @OneToMany(mappedBy = "nic", targetEntity = Rent.class)
    private List<Rent> rentList = new ArrayList<>();
}

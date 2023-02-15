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
public class Customer {
    @Id
    private String nic;
    private String dl_no;
    private String name;
    private String address;
    private String contact_no;
    private String email;
    private boolean nic_img;
    private boolean dl_img;
    private String gender;
}

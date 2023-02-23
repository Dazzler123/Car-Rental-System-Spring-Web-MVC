package lk.ijse.rental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class CustomerDTO {
    private String nic;
    private String dl_no;
    private String name;
    private String address;
    private String contact_no;
    private String email;
    private String gender;
    private String username;
    private String password;

    public CustomerDTO(String nic, String dl_no, String name, String address, String contact_no, String email, String gender) {
        this.nic = nic;
        this.dl_no = dl_no;
        this.name = name;
        this.address = address;
        this.contact_no = contact_no;
        this.email = email;
        this.gender = gender;
    }
}

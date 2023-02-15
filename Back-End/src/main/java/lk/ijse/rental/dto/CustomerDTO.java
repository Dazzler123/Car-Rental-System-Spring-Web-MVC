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
    private boolean nic_img;
    private boolean dl_img;
    private String gender;
}

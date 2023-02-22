package lk.ijse.rental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class DriverDTO {
    private String nic;
    private String dlNo;
    private String name;
    private String address;
    private String contactNo;
    private boolean occupied;   //is occupied or not (true or false)
}

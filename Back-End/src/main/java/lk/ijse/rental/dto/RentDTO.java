package lk.ijse.rental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class RentDTO {
    private String id;
    private String nic; //customer id
    private String registrationNo;  //vehicle id
    private String date;
    private String time;
}

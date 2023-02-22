package lk.ijse.rental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.ArrayList;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class RentDTO {
    private int rentId;
    private String nic; //customer id
    private String registrationNo;  //vehicle id
    private String date;
    private String time;

    private ArrayList<RentDetailsDTO> rentDetails;

//    public RentDTO(String nic, String registrationNo, String date, String time) {
//        this.nic = nic;
//        this.registrationNo = registrationNo;
//        this.date = date;
//        this.time = time;
//    }
}

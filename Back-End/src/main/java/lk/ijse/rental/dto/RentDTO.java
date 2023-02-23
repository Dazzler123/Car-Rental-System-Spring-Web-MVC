package lk.ijse.rental.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

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

    private List<RentDetailsDTO> rentDetails;

    public RentDTO(String nic, String registrationNo, String date, String time, List<RentDetailsDTO> rentDetails) {
        this.nic = nic;
        this.registrationNo = registrationNo;
        this.date = date;
        this.time = time;
        this.rentDetails = rentDetails;
    }
}

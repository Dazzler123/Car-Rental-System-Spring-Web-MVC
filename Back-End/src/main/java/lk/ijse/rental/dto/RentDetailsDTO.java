package lk.ijse.rental.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.math.BigDecimal;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class RentDetailsDTO {
    private int id;
    private String nic;  //driver nic or null
    private String pickUpDate;
    private String pickUpTime;
    private String bankImg;
    private BigDecimal damageWaiver;
    private String returnDate;
    private String returnTime;
    private String rentDuration;  //how many days rented

    public RentDetailsDTO(String nic, String pickUpDate, String pickUpTime, String bankImg, BigDecimal damageWaiver, String returnDate, String returnTime, String rentDuration) {
        this.nic = nic;
        this.pickUpDate = pickUpDate;
        this.pickUpTime = pickUpTime;
        this.bankImg = bankImg;
        this.damageWaiver = damageWaiver;
        this.returnDate = returnDate;
        this.returnTime = returnTime;
        this.rentDuration = rentDuration;
    }
}

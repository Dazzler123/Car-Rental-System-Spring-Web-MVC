package lk.ijse.rental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class RentDetailsDTO {
    private int id;
    private String driver;  //driver nic or null
    private String pickUpDate;
    private String pickUpTime;
    private boolean bankImg;
    private double damageWaiver;
    private String returnDate;
    private String returnTime;
    private String rentDuration;  //how many days rented
}

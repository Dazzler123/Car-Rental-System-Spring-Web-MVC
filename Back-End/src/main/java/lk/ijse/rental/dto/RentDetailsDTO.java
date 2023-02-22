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
    private String id;
    private String driver;  //driver nic
    private String pickUpDate;
    private String pickUpTime;
    private boolean bankImg;
    private double damageWaiver;  //saves 0 when placing the rent and after returning the car, if an damage was noticed
                                  //that amount charged will be updated here
    private String returnDate;
    private String returnTime;
    private String rentDuration;  //how many days rented
}

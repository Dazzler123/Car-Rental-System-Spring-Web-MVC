package lk.ijse.rental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class RentRecordsDTO {
    private int id;
    private String customerNic; //customer id
    private String registrationNo;  //vehicle id
    private String driverNic;  //driver nic or save "SELF"
    private String date;
    private String time;

    private String pickUpDate;
    private String pickUpTime;
    private String bankImgKey;   //image file key value
    private String returnDate;
    private String returnTime;
    private String rentDuration;
    private String extraKmDriven;
    private String totalCharge;
    private String damageWaiver;
}

package lk.ijse.rental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class Rental_Request {
    @Id
    private int requestId;
    private String customerNic;
    private String registrationNo;
    private String driverNic;
    private String date;
    private String time;

    private String pickUpDate;
    private String pickUpTime;
    private String bankImgKey;
    private String returnDate;
    private String returnTime;
    private String rentDuration;
}
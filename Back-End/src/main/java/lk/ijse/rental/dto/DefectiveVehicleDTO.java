package lk.ijse.rental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class DefectiveVehicleDTO {
    String vehicleId;
    String date; //date marked as defective
}

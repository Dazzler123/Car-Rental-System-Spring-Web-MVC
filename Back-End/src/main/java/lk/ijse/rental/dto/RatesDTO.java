package lk.ijse.rental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class RatesDTO {
    private String model;  //toyota corolla 2015
    private String type; //general, premium, luxury
    private double daily_rate;
    private double km_daily;
    private double monthly_rate;
    private double km_monthly;
    private double extra_km_rate;
}

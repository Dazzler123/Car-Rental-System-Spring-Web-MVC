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
public class Rates {
    @Id
    private String model;
    private String type;
    private double daily_rate;
    private double km_daily;
    private double monthly_rate;
    private double km_monthly;
    private double extra_km_rate;
}

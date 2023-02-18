package lk.ijse.rental.service;

import lk.ijse.rental.dto.VehicleDTO;

import java.util.ArrayList;

public interface VehicleService {
    public ArrayList<VehicleDTO> loadAllVehicles();

    public ArrayList<VehicleDTO> findAllByFilters(String type, String make, int passengers, String fuelType,
                                                  String transmission);

    public VehicleDTO findByVehicleModel(String model);
}

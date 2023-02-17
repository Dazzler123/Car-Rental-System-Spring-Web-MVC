package lk.ijse.rental.service;

import lk.ijse.rental.dto.VehicleDTO;

import java.util.ArrayList;

public interface VehicleService {
    public ArrayList<VehicleDTO> loadAllVehicles();

    public ArrayList<VehicleDTO> findAllByFilters(String type, String make, int passenger_count, String fuel_type,
                                                  String transmission);
}

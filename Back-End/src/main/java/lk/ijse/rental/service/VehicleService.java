package lk.ijse.rental.service;

import lk.ijse.rental.dto.VehicleDTO;

import java.util.ArrayList;

public interface VehicleService {
    public ArrayList<VehicleDTO> loadAllVehicles();
}

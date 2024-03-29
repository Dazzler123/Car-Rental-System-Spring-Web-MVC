package lk.ijse.rental.service;

import lk.ijse.rental.dto.VehicleDTO;
import lk.ijse.rental.util.ResponseUtil;

import java.util.ArrayList;

public interface VehicleService {
    public ArrayList<VehicleDTO> loadAllVehicles();

    public ArrayList<VehicleDTO> findAllByFilters(String type, String make, int passengers, String fuelType,
                                                  String transmission);

    public ArrayList<VehicleDTO> findByVehicleModel(String model, boolean reserved);

    public Long countAvailableOfModel(String model, boolean reserved);

    public VehicleDTO searchVehicle(String registrationNo);

    public String saveVehicle(VehicleDTO dto);

    public String updateVehicle(VehicleDTO dto);

    public void deleteVehicle(String registrationNo);
}

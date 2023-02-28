package lk.ijse.rental.service;

import lk.ijse.rental.dto.MaintenanceDTO;

import java.util.ArrayList;

public interface MaintenanceService {
    public void recordVehicle(MaintenanceDTO dto);

    public ArrayList<MaintenanceDTO> loadAllVehicles();
}

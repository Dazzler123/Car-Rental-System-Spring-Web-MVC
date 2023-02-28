package lk.ijse.rental.service;

import lk.ijse.rental.dto.DefectiveVehiclesDTO;

import java.util.ArrayList;

public interface DefectiveVehiclesService {
    public void saveVehicle(DefectiveVehiclesDTO dto);

    public ArrayList<DefectiveVehiclesDTO> loadAllVehicles();
}

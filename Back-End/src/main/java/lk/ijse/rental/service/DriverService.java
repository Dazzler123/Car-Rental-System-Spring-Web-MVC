package lk.ijse.rental.service;

import lk.ijse.rental.dto.DriverDTO;

import java.util.ArrayList;

public interface DriverService {
    public ArrayList<DriverDTO> getAllNonOccupied(boolean occupied);

    public DriverDTO searchDriverById(String nic);

    public void updateDriver(DriverDTO dto);

    public boolean findIfExists(String nic);
}

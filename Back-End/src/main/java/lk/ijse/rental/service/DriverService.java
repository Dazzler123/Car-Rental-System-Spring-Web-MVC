package lk.ijse.rental.service;

import lk.ijse.rental.dto.DriverDTO;

import java.util.ArrayList;

public interface DriverService {
    public ArrayList<DriverDTO> getAllNonOccupied(boolean occupied);
}

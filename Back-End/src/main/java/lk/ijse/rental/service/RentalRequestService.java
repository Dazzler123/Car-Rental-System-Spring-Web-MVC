package lk.ijse.rental.service;

import lk.ijse.rental.dto.RentalRequestDTO;

import java.util.ArrayList;

public interface RentalRequestService {
    public void saveRequest(RentalRequestDTO dto);

    public ArrayList<RentalRequestDTO> getAllRentalRequests();
}

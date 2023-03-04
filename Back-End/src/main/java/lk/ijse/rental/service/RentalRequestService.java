package lk.ijse.rental.service;

import lk.ijse.rental.dto.RentalRequestDTO;

import java.util.ArrayList;

public interface RentalRequestService {
    public void saveRequest(RentalRequestDTO dto);

    public ArrayList<RentalRequestDTO> getAllRentalRequests();

    public RentalRequestDTO searchRentalDetails(int requestId);

    public void updateDetails(RentalRequestDTO dto);

    public void deleteRequest(int requestId);
}

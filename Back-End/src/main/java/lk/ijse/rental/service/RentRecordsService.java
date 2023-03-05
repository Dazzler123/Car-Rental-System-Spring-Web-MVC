package lk.ijse.rental.service;

import lk.ijse.rental.dto.RentRecordsDTO;

import java.util.ArrayList;

public interface RentRecordsService {
    public void saveRent(RentRecordsDTO dto);

    public ArrayList<RentRecordsDTO> getAllRecords();
}

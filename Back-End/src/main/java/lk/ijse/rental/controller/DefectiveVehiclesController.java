package lk.ijse.rental.controller;

import lk.ijse.rental.dto.DefectiveVehiclesDTO;
import lk.ijse.rental.service.DefectiveVehiclesService;
import lk.ijse.rental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/defective")
@CrossOrigin
public class DefectiveVehiclesController {

    @Autowired
    DefectiveVehiclesService service;

    @PostMapping
    public ResponseUtil addToDefectiveList(DefectiveVehiclesDTO dto) {
        service.saveVehicle(dto);
        return new ResponseUtil("200", "Vehicle marked as defective.", null);
    }
}

//package lk.ijse.rental.controller;
//
//import lk.ijse.rental.dto.RatesDTO;
//import lk.ijse.rental.service.RatesService;
//import lk.ijse.rental.util.ResponseUtil;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/rates")
//@CrossOrigin
//public class RatesController {
//
//    @Autowired
//    RatesService service;
//
//    @GetMapping(params = "id")
//    public ResponseUtil getRateByVehicleId(String id) {
//        RatesDTO ratesDTO = service.searchRateById(id);
//        return new ResponseUtil("200","Vehicle Rates Found",ratesDTO);
//    }
//}

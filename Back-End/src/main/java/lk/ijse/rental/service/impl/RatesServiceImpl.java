package lk.ijse.rental.service.impl;

import lk.ijse.rental.dto.RatesDTO;
import lk.ijse.rental.service.RatesService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class RatesServiceImpl implements RatesService {
    @Override
    public RatesDTO searchRateByModel() {
        return null;
    }
}

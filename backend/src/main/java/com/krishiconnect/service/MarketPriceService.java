package com.krishiconnect.service;

import com.krishiconnect.model.MarketPrice;
import com.krishiconnect.repository.MarketPriceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MarketPriceService {

    @Autowired
    private MarketPriceRepository marketPriceRepository;

    public List<MarketPrice> getAllMarketPrices() {
        return marketPriceRepository.findAll();
    }

    public MarketPrice saveMarketPrice(MarketPrice marketPrice) {
        return marketPriceRepository.save(marketPrice);
    }
}

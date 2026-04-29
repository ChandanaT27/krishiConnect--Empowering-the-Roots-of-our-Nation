package com.krishiconnect.controller;

import com.krishiconnect.model.MarketPrice;
import com.krishiconnect.service.MarketPriceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/prices")
@CrossOrigin(origins = "*")
public class MarketPriceController {

    @Autowired
    private MarketPriceService marketPriceService;

    @GetMapping
    public List<MarketPrice> getAllMarketPrices() {
        return marketPriceService.getAllMarketPrices();
    }

    @PostMapping
    public MarketPrice createMarketPrice(@RequestBody MarketPrice marketPrice) {
        return marketPriceService.saveMarketPrice(marketPrice);
    }
}

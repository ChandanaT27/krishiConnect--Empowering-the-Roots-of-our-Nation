package com.krishiconnect.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "market_prices")
public class MarketPrice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String commodity;
    private String unit;
    private Double price;
    private String trend; // e.g., "Up", "Down", "Stable"

    public MarketPrice() {}
    public MarketPrice(Long id, String commodity, String unit, Double price, String trend) {
        this.id = id;
        this.commodity = commodity;
        this.unit = unit;
        this.price = price;
        this.trend = trend;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getCommodity() { return commodity; }
    public void setCommodity(String commodity) { this.commodity = commodity; }
    public String getUnit() { return unit; }
    public void setUnit(String unit) { this.unit = unit; }
    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }
    public String getTrend() { return trend; }
    public void setTrend(String trend) { this.trend = trend; }
}

package com.krishiconnect.config;

import com.krishiconnect.model.*;
import com.krishiconnect.repository.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
public class DataInitializer {

    private static final Logger logger = LoggerFactory.getLogger(DataInitializer.class);

    @Bean
    CommandLineRunner initDatabase(ProductRepository productRepo, 
                                   MarketPriceRepository priceRepo,
                                   SubsidyRepository subsidyRepo,
                                   DiseaseRepository diseaseRepo,
                                   TutorialRepository tutorialRepo,
                                   UserRepository userRepo) {
        return args -> {
            logger.info("Starting data seeding process...");

            // Seed Users
            if (userRepo.count() == 0) {
                logger.info("Seeding users...");
                userRepo.save(new User("admin@krishi.com", "admin123", "ADMIN", "System Admin"));
                userRepo.save(new User("farmer@krishi.com", "farmer123", "FARMER", "Farmer John"));
                userRepo.save(new User("user@krishi.com", "user123", "USER", "Normal User"));
            }

            // Seed Products
            if (productRepo.count() == 0) {
                logger.info("Seeding products...");
                productRepo.saveAll(Arrays.asList(
                    new Product(null, "Organic Tomatoes", "Vegetables", 2.5, "Fresh organic tomatoes from rural farms.", "Farmer John"),
                    new Product(null, "Basmati Rice", "Grains", 15.0, "High-quality long-grain basmati rice.", "Farmer Sarah"),
                    new Product(null, "Honey", "Dairy & More", 8.0, "Pure wild honey collected from forests.", "Farmer Ahmed"),
                    new Product(null, "Green Spinach", "Vegetables", 1.2, "Rich in iron, freshly plucked spinach.", "Farmer John"),
                    new Product(null, "Red Apples", "Fruits", 4.5, "Crispy and sweet Kashmiri apples.", "Farmer David"),
                    new Product(null, "Almonds", "Nuts", 12.0, "Premium quality California almonds.", "Farmer Sarah"),
                    new Product(null, "Carrots", "Vegetables", 1.8, "Crunchy orange carrots.", "Farmer John"),
                    new Product(null, "Grapes", "Fruits", 3.2, "Seedless green grapes.", "Farmer David"),
                    new Product(null, "Wheat Flour", "Grains", 2.0, "Stone-ground whole wheat flour.", "Farmer Sarah"),
                    new Product(null, "Cow Milk", "Dairy & More", 1.5, "Fresh unadulterated cow milk.", "Farmer Ahmed"),
                    new Product(null, "Potatoes", "Vegetables", 1.0, "Farm-fresh potatoes.", "Farmer John"),
                    new Product(null, "Bananas", "Fruits", 0.8, "Natural ripened bananas.", "Farmer David"),
                    new Product(null, "Corn Kernels", "Grains", 2.2, "Sweet corn for snacks.", "Farmer Sarah")
                ));
            }

            // Seed Market Prices
            if (priceRepo.count() == 0) {
                logger.info("Seeding market prices...");
                priceRepo.saveAll(Arrays.asList(
                    new MarketPrice(null, "Tomato", "kg", 30.0, "Up"),
                    new MarketPrice(null, "Onion", "kg", 25.0, "Down"),
                    new MarketPrice(null, "Potato", "kg", 20.0, "Stable"),
                    new MarketPrice(null, "Rice", "kg", 45.0, "Up"),
                    new MarketPrice(null, "Wheat", "kg", 28.0, "Stable"),
                    new MarketPrice(null, "Corn", "kg", 22.0, "Down"),
                    new MarketPrice(null, "Carrot", "kg", 35.0, "Up"),
                    new MarketPrice(null, "Apple", "kg", 120.0, "Stable"),
                    new MarketPrice(null, "Banana", "dozen", 40.0, "Down"),
                    new MarketPrice(null, "Grapes", "kg", 80.0, "Up"),
                    new MarketPrice(null, "Milk", "liter", 55.0, "Stable"),
                    new MarketPrice(null, "Sugar", "kg", 40.0, "Stable")
                ));
            }

            // Seed Subsidies
            if (subsidyRepo.count() == 0) {
                logger.info("Seeding subsidies...");
                subsidyRepo.saveAll(Arrays.asList(
                    new Subsidy(null, "PM-Kisan Scheme", "Rs. 6000 per year direct income support.", "All landholding farmers.", "https://pmkisan.gov.in/"),
                    new Subsidy(null, "Kisan Credit Card (KCC)", "Low-interest loans for farming needs.", "Farmers, SHGs, JLGs.", "https://www.rbi.org.in/"),
                    new Subsidy(null, "Pradhan Mantri Fasal Bima Yojana", "Crop insurance against natural calamities.", "All farmers including sharecroppers.", "https://pmfby.gov.in/"),
                    new Subsidy(null, "Soil Health Card Scheme", "Free soil testing and recommendations.", "Individual farmers.", "https://soilhealth.dac.gov.in/"),
                    new Subsidy(null, "Solar Pump Subsidy (KUSUM)", "60% subsidy for solar water pumps.", "Individual/Group farmers.", "https://mnre.gov.in/"),
                    new Subsidy(null, "Paramparagat Krishi Vikas Yojana", "Support for organic farming groups.", "Farmer groups (Bhartiya Prakritik Krishi Paddhati).", "https://pgsindia-ncof.gov.in/"),
                    new Subsidy(null, "Micro Irrigation Fund", "Financial aid for drip and sprinkler irrigation.", "State governments and farmers.", "https://nabard.org/"),
                    new Subsidy(null, "National Bamboo Mission", "Support for bamboo plantation and processing.", "Farmers and entrepreneurs.", "https://nbm.nic.in/"),
                    new Subsidy(null, "Livestock Insurance Scheme", "Insurance for cattle and buffaloes.", "Livestock owners.", "https://dahd.nic.in/"),
                    new Subsidy(null, "Agri-Clinic & Agri-Business Centers", "Financial support for agriculture graduates.", "Agri graduates.", "https://www.agriclinics.net/")
                ));
            }

            // Seed Diseases
            if (diseaseRepo.count() == 0) {
                logger.info("Seeding diseases...");
                diseaseRepo.saveAll(Arrays.asList(
                    new Disease(null, "Tomato", "Late Blight", "Dark spots on leaves, rotting fruit.", "Fungus Phytophthora infestans.", "Use copper-based fungicides."),
                    new Disease(null, "Potato", "Early Blight", "Small brown spots with concentric rings.", "Fungus Alternaria solani.", "Proper crop rotation and fungicides."),
                    new Disease(null, "Wheat", "Leaf Rust", "Orange-brown pustules on leaves.", "Puccinia triticina fungus.", "Plant resistant varieties."),
                    new Disease(null, "Rice", "Blast", "Diamond-shaped lesions on leaves.", "Magnaporthe oryzae fungus.", "Balanced nitrogen use and tricyclazole."),
                    new Disease(null, "Apple", "Scab", "Velvety brown spots on leaves and fruit.", "Venturia inaequalis fungus.", "Apply sulfur-based fungicides."),
                    new Disease(null, "Banana", "Panama Disease", "Yellowing and wilting of leaves.", "Fusarium oxysporum fungus.", "Use disease-free suckers."),
                    new Disease(null, "Corn", "Smut", "Large, fleshy galls on ears and stalks.", "Ustilago maydis fungus.", "Remove galls before they burst."),
                    new Disease(null, "Grapes", "Powdery Mildew", "White powdery growth on all green parts.", "Erysiphe necator fungus.", "Apply sulfur dust or fungicides."),
                    new Disease(null, "Onion", "Purple Blotch", "Small water-soaked lesions turning purple.", "Alternaria porri fungus.", "Spray mancozeb or carbendazim."),
                    new Disease(null, "Citrus", "Canker", "Lesions on leaves, stems, and fruit.", "Xanthomonas citri bacteria.", "Copper sprays and pruning.")
                ));
            }

            // Seed Tutorials
            if (tutorialRepo.count() == 0) {
                logger.info("Seeding tutorials...");
                tutorialRepo.saveAll(Arrays.asList(
                    new Tutorial("Modern Organic Farming", "77mS7_Olj_w", "Learn the basics of organic farming."),
                    new Tutorial("Hydroponics at Home", "3Ww2mD-XN6M", "Step-by-step guide for hydroponics."),
                    new Tutorial("Sustainable Soil Health", "vD6-8_vD8_M", "Improving soil productivity naturally."),
                    new Tutorial("Drip Irrigation Setup", "S6LzT0D0m_Q", "Efficient water management for crops."),
                    new Tutorial("Kitchen Gardening", "KqV0V7Oq6_M", "Grow your own vegetables at home."),
                    new Tutorial("Mushroom Cultivation", "lBq6uD8X0_w", "Starting a small-scale mushroom farm."),
                    new Tutorial("Integrated Pest Management", "R-vR-vR-vR", "Natural ways to control pests."),
                    new Tutorial("Composting 101", "1234567890", "How to make your own organic fertilizer."),
                    new Tutorial("Beekeeping for Farmers", "0987654321", "Increase pollination and earn from honey."),
                    new Tutorial("Greenhouse Management", "abcdefghijk", "Controlled environment agriculture guide.")
                ));
            }

            logger.info("Data seeding process completed successfully.");
        };
    }
}


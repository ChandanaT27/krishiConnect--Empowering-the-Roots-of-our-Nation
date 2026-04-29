package com.krishiconnect.controller;

import com.krishiconnect.model.Disease;
import com.krishiconnect.service.DiseaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/diseases")
@CrossOrigin(origins = "*")
public class DiseaseController {

    @Autowired
    private DiseaseService diseaseService;

    @GetMapping
    public List<Disease> getAllDiseases() {
        return diseaseService.getAllDiseases();
    }

    @PostMapping
    public Disease createDisease(@RequestBody Disease disease) {
        return diseaseService.saveDisease(disease);
    }
}

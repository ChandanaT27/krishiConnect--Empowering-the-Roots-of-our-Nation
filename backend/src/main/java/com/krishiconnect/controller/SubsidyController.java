package com.krishiconnect.controller;

import com.krishiconnect.model.Subsidy;
import com.krishiconnect.service.SubsidyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subsidies")
@CrossOrigin(origins = "*")
public class SubsidyController {

    @Autowired
    private SubsidyService subsidyService;

    @GetMapping
    public List<Subsidy> getAllSubsidies() {
        return subsidyService.getAllSubsidies();
    }

    @PostMapping
    public Subsidy createSubsidy(@RequestBody Subsidy subsidy) {
        return subsidyService.saveSubsidy(subsidy);
    }
}

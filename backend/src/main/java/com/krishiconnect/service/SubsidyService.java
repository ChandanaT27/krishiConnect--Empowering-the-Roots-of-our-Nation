package com.krishiconnect.service;

import com.krishiconnect.model.Subsidy;
import com.krishiconnect.repository.SubsidyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubsidyService {

    @Autowired
    private SubsidyRepository subsidyRepository;

    public List<Subsidy> getAllSubsidies() {
        return subsidyRepository.findAll();
    }

    public Subsidy saveSubsidy(Subsidy subsidy) {
        return subsidyRepository.save(subsidy);
    }
}

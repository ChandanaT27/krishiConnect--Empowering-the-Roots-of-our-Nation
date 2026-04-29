package com.krishiconnect.service;

import com.krishiconnect.model.Disease;
import com.krishiconnect.repository.DiseaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiseaseService {

    @Autowired
    private DiseaseRepository diseaseRepository;

    public List<Disease> getAllDiseases() {
        return diseaseRepository.findAll();
    }

    public Disease saveDisease(Disease disease) {
        return diseaseRepository.save(disease);
    }
}

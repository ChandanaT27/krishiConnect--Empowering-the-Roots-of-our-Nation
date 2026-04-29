package com.krishiconnect.repository;
import com.krishiconnect.model.Disease;
import org.springframework.data.jpa.repository.JpaRepository;
public interface DiseaseRepository extends JpaRepository<Disease, Long> {}

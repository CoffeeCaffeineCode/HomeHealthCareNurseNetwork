package com.csula.thesis_project.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;

import com.csula.thesis_project.model.Nurse;

@Component
public interface NurseRepository extends MongoRepository<Nurse, String> {
	public List<Nurse> findByFirstName(String firstName);
    public Nurse findByNurseId(String id);
    public Nurse findByUserId(String userId);
}

package com.csula.thesis_project.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;

import com.csula.thesis_project.model.User;

@Component
public interface UserRepository  extends MongoRepository<User, String>{
	public User findByConfirmationToken(String confirmationToken);
	public User findByUserName(String userName);
}

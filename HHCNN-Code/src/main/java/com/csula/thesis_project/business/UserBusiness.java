package com.csula.thesis_project.business;

import java.util.UUID;

import javax.inject.Inject;

import org.springframework.stereotype.Component;

import com.csula.thesis_project.model.User;
import com.csula.thesis_project.repository.UserRepository;

@Component
public class UserBusiness {
	@Inject 
	private UserRepository userRepository;
	
	public User getUser(String token){		
		User user= userRepository.findByConfirmationToken(token);
		return user;
	}
	public void enableUser(User user, String token){
		// Update User 
		User userr = user;		
		userr.setEnabled(true);		
		userRepository.save(userr);
		
	}
	public User saveUser(String username,String password,String role ){
		//Save User 
		User user = new User();
		user.setUserName(username);
		user.setEnabled(false);
		user.setPassword(password);
		user.setRole(role);
		user.setConfirmationToken(UUID.randomUUID().toString());
		
		user= userRepository.save(user);
		return user;
	}
}

package com.csula.thesis_project.controller;

//import javax.inject.Inject;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.csula.thesis_project.business.UserBusiness;
import com.csula.thesis_project.model.User;

//@Controller
@RestController
public class UserController{
	//@Inject
	private UserBusiness userBusiness;
	
	@RequestMapping(value="/user", method= RequestMethod.GET)
	public String getUser(@RequestParam(value="token") String token) throws Exception{
		User user= userBusiness.getUser(token);
		if( user==null){
			return "Sorry, your registration is not confirmed ";
		}else{
			userBusiness.enableUser(user, token);
			return "Confirmed Successfully!";
			
		}
		
	}
	
	public User postUser(@RequestParam(value = "password", required = true) String password,
		@RequestParam(value = "username", required = true) String username,@RequestParam(value = "role", required = true) String role) throws Exception{
		
			return userBusiness.saveUser(username, password, role);
	}	
}
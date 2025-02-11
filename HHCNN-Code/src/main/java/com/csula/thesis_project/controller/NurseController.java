package com.csula.thesis_project.controller;

import javax.inject.Inject;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.csula.thesis_project.business.NurseBusiness;
import com.csula.thesis_project.model.Nurse;

@RestController
public class NurseController {
	@Inject
	private NurseBusiness nurseBusiness;		

	@RequestMapping(value="/nurseRegistration", method=RequestMethod.POST)
	public Nurse postNurse(@RequestParam(value = "firstname", required = true) String firstname,
			@RequestParam(value = "lastname", required = true) String lastname, 
			@RequestParam(value ="dateofbirth") String dateofbirth, 
			@RequestParam(value = "gender", required = true) String gender,
			@RequestParam(value = "zipcode", required = true) String zipcode,
			@RequestParam(value = "tel", required = true) String tel,
			@RequestParam(value = "licensenumber", required = true) String licensenumber,
			@RequestParam(value = "nursingdegreetype", required = true) String nursingdegreetype,
			@RequestParam(value = "email", required = true) String email,
			@RequestParam(value = "password", required = true) String password,
			@RequestParam(value = "username", required = true) String username)throws Exception{					
			
			System.out.print("Nurse Controler POST ");

			return nurseBusiness.postNurse(firstname, lastname,dateofbirth, gender, zipcode, tel, licensenumber, nursingdegreetype, email, password,username);
			
			}
	

}


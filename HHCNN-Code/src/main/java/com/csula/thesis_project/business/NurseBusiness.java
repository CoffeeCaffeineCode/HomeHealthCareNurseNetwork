package com.csula.thesis_project.business;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.csula.thesis_project.controller.UserController;
import com.csula.thesis_project.model.Mail;
import com.csula.thesis_project.model.Nurse;
import com.csula.thesis_project.model.User;
//import com.csula.thesis_project.repository.AssignmentRepository;
import com.csula.thesis_project.repository.NurseRepository;
import com.csula.thesis_project.service.EmailService;

@Component
public class NurseBusiness {
	
	@Inject
	private NurseRepository nurseRepository;
	
	@Inject
	private UserController userController;
	
	/*@Inject
	public AssignmentRepository assignmentRepository;*/
		
	@Autowired
    private EmailService emailService;
	
	HttpServletRequest request;
	
	public Nurse postNurse(String firstName, String lastName, String dateofbirth, String gender, String zipcode, String tel, String licenseNumber,
			String nursingdegreeType, String email, String password, String username) throws Exception {

		//save USER
		User user = new User();
		user= userController.postUser(password, username,"Nurse");	
		
		// set Email attributes + send Email
		////////////change setTo to user's email
		
/*        String subject = "Registration Confirmation";
        String confirmationUrl 
          = event.getAppUrl() + "/regitrationConfirm.html?token=" + token;
        String message = messages.getMessage("message.regSucc", null, event.getLocale());
         
        SimpleMailMessage email = new SimpleMailMessage();
        email.setTo(recipientAddress);
        email.setSubject(subject);
        email.setText(message + " rn" + "http://localhost:8080" + confirmationUrl);
        mailSender.send(email);*/
		
		
		
		//String appUrl = request.getScheme() + "://" + request.getServerName();
		
		//--------------------------------------------------------------------
		
		//Send email
		String appUrl = "http://localhost:8090";
		Mail mail = new Mail();
	    mail.setFrom("nazlifard@gmail.com");
	    mail.setTo(email);
	    mail.setSubject("Sending Simple Email with JavaMailSender Google SMTP TEST");
	    mail.setContent ("Hiiiiii "+firstName+"\n"+"To confirm your e-mail address, please click the link below:\n"
				+ appUrl + "/user?token=" + user.getConfirmationToken());
	    
	    emailService.sendSimpleMessage(mail);	
	    
	    //Save Nurse
		Nurse nurse = new Nurse();
		nurse.setFirstName(firstName);
		nurse.setLastName(lastName);
		nurse.setDateofbirth(dateofbirth);
		nurse.setGender(gender);
		nurse.setZipcode(zipcode);
		nurse.setTel(tel);
		nurse.setLicenseNumber(licenseNumber);
		nurse.setNursingdegreetype(nursingdegreeType);
		nurse.setEmail(email);
		nurse.setPassword(password);
		nurse.setUsername(username);
		nurse.setUserId(user.getId());
		nurse.setAvailable(false);
		nurse = nurseRepository.save(nurse);
			    
		return nurse;
	}

	public Nurse postNurse(Nurse nurse) {
		nurseRepository.save(nurse);
		return nurse;
	}
}

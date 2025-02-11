package com.csula.thesis_project.model;

import org.springframework.data.annotation.Id;
import com.fasterxml.jackson.annotation.JsonFormat;

public class Nurse {
	@Id
	public String id;

	public String firstName;
	public String lastName;
	
	@JsonFormat(pattern = "MM-dd-yyyy")	
	public String dateofbirth;
	
	public String gender;
	public String  zipcode;
	public String tel;
	public String licenseNumber;
	public String nursingdegreeType;
	public String email;
	public String username;	
	public String password;
	//FK
	public String userId;
	public boolean available;
	
	
	
	public boolean isAvailable() {
		return available;
	}

	public void setAvailable(boolean available) {
		this.available = available;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserid(String userId) {
		this.userId = userId;
	}

	public String getNursingdegreeType() {
		return nursingdegreeType;
	}

	public void setNursingdegreeType(String nursingdegreeType) {
		this.nursingdegreeType = nursingdegreeType;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public String getLicenseNumber() {
		return licenseNumber;
	}

	public String getNursingdegreetype() {
		return nursingdegreeType;
	}

	public void setNursingdegreetype(String nursingdegreetype) {
		this.nursingdegreeType = nursingdegreetype;
	}

	public void setLicenseNumber(String licenseNumber) {
		this.licenseNumber = licenseNumber;
	}

	

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getDateofbirth() {
		return dateofbirth;
	}

	public void setDateofbirth(String dateofbirth) {
		this.dateofbirth = dateofbirth;
	}

	public Nurse() {
		this.firstName = "";
		this.lastName = "";
	}

	public Nurse(String firstName, String lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

}

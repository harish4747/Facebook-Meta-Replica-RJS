package com.myspring.facebook.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
public class Facebook {

	@Id
	private String mobile_email;
	private String fname;
	private String sname;
	private String dob;
	private String gender;
	private String password;
	
	public String getMobile_email() {
		return mobile_email;
	}
	public void setMobile_email(String mobile_email) {
		this.mobile_email = mobile_email;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getSname() {
		return sname;
	}
	public void setSname(String sname) {
		this.sname = sname;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getpassword() {
		return password;
	}
	public void setpassword(String password) {
		this.password = password;
	}

	
}

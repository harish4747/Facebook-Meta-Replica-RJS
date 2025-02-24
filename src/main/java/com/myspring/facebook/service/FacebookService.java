package com.myspring.facebook.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.myspring.facebook.model.Facebook;
import com.myspring.facebook.repository.FacebookRepository;

@Service
public class FacebookService {

	@Autowired
	FacebookRepository facebookrepository;

	public String signUp(Facebook facebook) {
		
		facebookrepository.save(facebook);
		return "added succesfully...";
	}

	public List<Facebook> getUsers() {
		
		return facebookrepository.findAll();
	}

	public Facebook getSingleUser(String mobile_email) {

		return facebookrepository.findById(mobile_email).orElse(null);

	}

}

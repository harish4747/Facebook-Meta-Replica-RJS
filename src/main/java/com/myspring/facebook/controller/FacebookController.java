package com.myspring.facebook.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.myspring.facebook.model.Facebook;
import com.myspring.facebook.service.FacebookService;

@RestController
@CrossOrigin(origins="https://face-book-harich4747.netlify.app/")
public class FacebookController {

	@Autowired
	FacebookService facebookservice;

	@GetMapping("/")
	public ResponseEntity<List<Facebook>> getUsers() {
		List<Facebook> userList = facebookservice.getUsers();
		if (userList.isEmpty()) {
			return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(userList, HttpStatus.OK);
	}

	@GetMapping("/{mobile_email}")
	public ResponseEntity<?> getSingleUser(@PathVariable String mobile_email) {
		Facebook singleUser = facebookservice.getSingleUser(mobile_email);
		if (singleUser == null) {
			return new ResponseEntity<>("User Not Found", HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(singleUser, HttpStatus.OK);
	}

	@PostMapping("/signup")
	public ResponseEntity<?> signUp(@RequestBody Facebook facebook) {
		String status = facebookservice.signUp(facebook);
		return new ResponseEntity<>(status, HttpStatus.ACCEPTED);
	}
}

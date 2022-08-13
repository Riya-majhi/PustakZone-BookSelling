package com.contact.PustakZoneContactService.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.contact.PustakZoneContactService.Bean.Contact;
import com.contact.PustakZoneContactService.Service.ContactService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Controller {
	
	@Autowired
	ContactService cService;
	
	@PostMapping("/contact")
	public ResponseEntity<String> savecontact(@RequestBody Contact c){
		Contact contact=cService.saveContact(c);
		if(contact!=null) {
			return ResponseEntity.status(HttpStatus.OK).body("Your Request is sent to our team. They will solve it shortly");
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("bad request");
	}

}

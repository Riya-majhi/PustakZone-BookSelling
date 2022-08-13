package com.contact.PustakZoneContactService.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.contact.PustakZoneContactService.Bean.Contact;
import com.contact.PustakZoneContactService.Repository.ContactRepository;

@Service
public class ContactService {
	
	@Autowired
	ContactRepository crepo;
	
	public Contact saveContact(Contact c) {
		try {
			return crepo.save(c);
			
		}
		catch (Exception e) {
			return null;
		}
	}

}

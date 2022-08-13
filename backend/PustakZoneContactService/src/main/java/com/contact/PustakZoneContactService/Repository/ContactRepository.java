package com.contact.PustakZoneContactService.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.contact.PustakZoneContactService.Bean.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Integer> {

}

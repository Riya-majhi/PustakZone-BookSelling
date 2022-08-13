package com.pustakZone.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pustakZone.Repository.OrderRepository;
import com.pustakZone.Repository.UserRepo;
import com.pustakZone.bean.Users;


@Service
public class Services {
	private String ck;
//	-----------------------------------------------------------------Users-------------------------------------------------------
	@Autowired
	private UserRepo urepo;
	
	@Autowired
	private OrderRepository orepo;
	
	public void addCookie( String email) {
		this.ck=email;
	}
	public String getCookie() {
		return this.ck;
	}
	public Users addUser(Users user) {
		try {
			return urepo.save(user);
		}
		catch (Exception e) {
			return null;
		}
	}
	public List<Users> getall(){
		try {
			return urepo.findAll();
		}
		catch (Exception e) {
			return null;
		}
	}
	
	public int countUser() {
		return urepo.findAll().size();
	}
	
	public Users getBYId(String email) {
		try {
			if(email!=null) {
				return urepo.findById(email).get();
			}
			return null;
		}
		catch (Exception e) {
			return null;
		}
	}
	
	public void deleteUser(String email)
	{
		orepo.deleteByUserId(email);
		urepo.deleteById(email);
	}
	public boolean isValid(String email, String pwd) {
		try {
			Users u=getBYId(email.toLowerCase());
			if(u.getCpwd().equals(pwd)) {
				return true;
			}
			return false;
			
		}
		catch (Exception e) {
			return false;
		}
	}
	

}

package com.pustakZone.bean;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Users")
public class Users {

	@Id
	private String email;
	private String name;
	private String address;
	private String city;
	private long phone;
	private String gender;
	private String password;
	private String cpwd;
	
	public Users() {
		super();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {
		this.phone = phone;
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

	@Override
	public String toString() {
		return "UserBean [name=" + name + ", address=" + address + ", email=" + email + ", city=" + city + ", phone="
				+ phone + ", password=" + password + ", gender=" + gender + "]";
	}

	public Users(String name, String address, String email, String city, long phone, String password,
			String gender) {
		super();
		this.name = name;
		this.address = address;
		this.email = email;
		this.city = city;
		this.phone = phone;
		this.password = password;
		this.gender = gender;
	}

	public String getCpwd() {
		return cpwd;
	}

	public void setCpwd(String cpwd) {
		this.cpwd = cpwd;
	}
	
	

}
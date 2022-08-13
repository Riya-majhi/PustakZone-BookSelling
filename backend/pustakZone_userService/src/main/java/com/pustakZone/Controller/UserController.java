package com.pustakZone.Controller;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.json.JsonMapper;
import com.pustakZone.Services.Services;
import com.pustakZone.bean.Users;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class UserController {
	
	
	@Autowired
	private Services services;
	@Autowired
	private BCryptPasswordEncoder encoder;
	
	@PostMapping("/register")
	public ResponseEntity<String> saveuser(@RequestBody Users user) {
			Users u=services.getBYId(user.getEmail());
			if(u==null) {
				if(user.getPassword().equals(user.getCpwd())) {
					
					user.setEmail(user.getEmail().toLowerCase());
					user.setPassword(encoder.encode(user.getPassword()));
					services.addUser(user);
					services.addCookie(user.getEmail());
					System.out.println("saved");
					return ResponseEntity.status(HttpStatus.OK).body("saved");
				}
				return ResponseEntity.status(HttpStatus.OK).body("Not Equal");
				
			}
			
			System.out.println("already exists");
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User Already Exist Please SignIn");
		}
	@GetMapping("/count-user")
	public String countUser() {
		return services.countUser()+"";
	}
	
		
	@PostMapping("/login")
	public ResponseEntity<String> login(HttpServletResponse response,HttpServletRequest request) throws IOException {
		
		String body = request.getReader().lines().collect(Collectors.joining());
	    ObjectMapper mapper = new JsonMapper();
	    JsonNode json = mapper.readTree(body);
	    String email = json.get("email").asText();
	    String pwd = json.get("password").asText();

		boolean isValid=services.isValid(email.toLowerCase(),pwd);
		if(isValid==true) {
			System.out.println(email+"  "+pwd);
			services.addCookie(email);
			return ResponseEntity.status(HttpStatus.OK).body("Congrats!!!You are successfully Logged in");
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("inValid");
	}
	
	
	
	@GetMapping("/getCookie")
	public ResponseEntity<String> getCookie() {
			String messages=services.getCookie();
			System.out.println(messages);
			if (messages == "" || messages==null) {
				
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("inValid");
			}
			

			return ResponseEntity.status(HttpStatus.OK).body(messages);
		}
	
	@GetMapping("/users")
	public List<Users> getAllUsers(){
		return services.getall();
	}
	
	@GetMapping("/users/{email}")
	public Users getByid(@PathVariable  String email) {
			return services.getBYId(email);
	}
	
	@DeleteMapping("/users/{email}")
	public void deleteUsers(@PathVariable String email){
			services.deleteUser(email);
	}
	
	
	@PostMapping("/logout")
	public ResponseEntity<String> logout() {
		String email=services.getCookie();
		if(email!=null) {
			services.addCookie(null);
			return ResponseEntity.status(HttpStatus.OK).body("You are logged out");
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("something went wrong");
		
	}
	
}

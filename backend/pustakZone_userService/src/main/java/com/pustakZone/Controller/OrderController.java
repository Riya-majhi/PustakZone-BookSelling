package com.pustakZone.Controller;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.json.JsonMapper;
import com.pustakZone.Services.OrderService;
import com.pustakZone.Services.Services;
import com.pustakZone.bean.Book;
import com.pustakZone.bean.OrderBook;
import com.pustakZone.bean.Users;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

	@Autowired
	private OrderService oservice;
	
	@Autowired
	private RestTemplate rest;
	
	@Autowired
	private Services service;
	
//	public String getCookies(HttpServletRequest request) {
//		String email="";
//		Cookie[] ck =request.getCookies();
//		for(Cookie c:ck) {
//			if(c.getName().equals("cookie")) {
//				email=c.getValue();
//			}
//		}
//		return email;
//	}

	@PostMapping("orders/{bId}")
	public ResponseEntity<String> bookOrder(@PathVariable int bId,HttpServletRequest request) throws IOException {
		String body = request.getReader().lines().collect(Collectors.joining());
	    ObjectMapper mapper = new JsonMapper();
	    JsonNode json = mapper.readTree(body);
	    String price = json.get("price").asText();
	    String address = json.get("address").asText();
	    String cat=json.get("cat").asText();
		Book b=this.rest.getForObject("http://localhost:9091/book/"+bId, Book.class);
		String email=service.getCookie();
		Users u=service.getBYId(email);
		System.out.println(email);
		System.out.println(price+" "+address+" "+cat);
		OrderBook ob=oservice.addOrder(b,u,price,address,cat);
		if(ob!=null) {
//			String subject="Your Order is Booked";
//			String message="Thanyou for choosing PustakZone. \n Your order for "+b.getbTitle()+" has been booked. \n Please be Ready with Rs."
//					+ price.substring(0, price.length()-1)+". Our delivery boy will reach to you. \n Your Order Id is "+ob.getoId()+"\n\n -Regards.";
//			oservice.sendEmail(email,subject,message);
			return ResponseEntity.status(HttpStatus.OK).body(ob.getoId()+"");
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid");
	}
	@GetMapping("/count-order")
	public String countOrder() {
		return oservice.countOrder()+"";
	}
	
	@GetMapping("/orders/")
	public List<OrderBook> getAllOrder(){
		return oservice.getAllOrder();
	}
	
	@GetMapping("/orders/{id}")
	public OrderBook  getOrder(@PathVariable int id) {
		OrderBook ob=oservice.getOrder(id);
		System.out.println(ob);
		return ob;
	}
	@DeleteMapping("/orders/{id}")
	public void  deleteOrder(@PathVariable int id) {
		oservice.deleteOrder(id);
	}

}

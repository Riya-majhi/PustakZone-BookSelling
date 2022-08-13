package com.pustakZone.Services;

import java.util.List;
import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pustakZone.Repository.OrderRepository;
import com.pustakZone.bean.Book;
import com.pustakZone.bean.OrderBook;
import com.pustakZone.bean.Users;

@Service
public class OrderService {
	@Autowired
	private OrderRepository orepo;

	
	
	
	public OrderBook addOrder(Book b,Users u,String price,String address,String cat) {
		try {
			OrderBook o=new OrderBook();
			o.setbId(b.getbId());
			o.setbGenre(b.getbGenre());
			o.setbPrice(price);
			o.setbTitle(b.getbTitle());
			o.setuId(u.getEmail());
			o.setuName(u.getName());
			o.setCat(cat);
			o.setuAddress(address);
			o.setuPhone(u.getPhone());
			orepo.save(o);
			return o;
		}
		catch (Exception e) {
			return null;
		}
	}

	public int countOrder() {
		return orepo.findAll().size();
	}

	public List<OrderBook> getAllOrder() {
		try {
			return orepo.findAll();
		}
		catch (Exception e) {
			return null;
		}
	}
	public OrderBook getOrder(int id) {
		try {
			return orepo.findById(id).get();
		}
		catch (Exception e) {
			return null;
		}
	}


	public void deleteOrder(int id) {
		orepo.deleteById(id);
	}
	
//	---------------------------------------------Email sending-------------------------------------
//	public void sendEmail(String to,String subject,String message) {
//		// setting host
//		String from="aryastark8763@gmail.com";
//		Properties prop = new Properties();
//		prop.put("mail.smtp.auth", true);
//		prop.put("mail.smtp.ssl.enable", true);
//		prop.put("mail.smtp.host", "smtp.gmail.com");
//		prop.put("mail.smtp.port", "465");
//
//		
//		// get the session
//		Session session=Session.getInstance(prop,new Authenticator() {
//
//			@Override
//			protected PasswordAuthentication getPasswordAuthentication() {
//				// TODO Auto-generated method stub
//				return new PasswordAuthentication("aryastark8763@gmail.com", "tihuytzfojtedqyw");
//			}
//			
//		});
//		session.setDebug(true);
//		
//		//compose the mail
//		
//		MimeMessage m=new MimeMessage(session);
//	
//		try {
//			m.setFrom(from);
//			
//			// add recipient
//			m.addRecipient(javax.mail.Message.RecipientType.TO, new InternetAddress(to));
//			
//			//add subject
//			m.setSubject(subject);
//			
//			m.setText(message);
//			
//			Transport.send(m);
//			
//			
//		} catch (MessagingException e) {
//			e.printStackTrace();
//		}
//		
//	}

}

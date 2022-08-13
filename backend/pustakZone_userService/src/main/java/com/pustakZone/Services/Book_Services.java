//package com.pustakZone.Services;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.pustakZone.Repository.BookRepo;
//import com.pustakZone.bean.Book;
//
//
//@Service
//public class Book_Services {
////	--------------------------------------------------Books-------------------------------------------------------
//	@Autowired
//	private BookRepo brepo;
//	
//	public Book addBook(Book b) {
//		try {
//		return brepo.save(b);
//		}
//		catch (Exception e) {
//			return null;
//		}
//	}
//	
//	public Book getBookById(int id) {
//		try {
//			return brepo.findById(id).get();
//		}
//		catch (Exception e) {
//			return null;
//		}
//	}
//	
//	public List<Book> getAllBook(){
//		try {
//			return brepo.findAll();
//			
//		}
//		catch (Exception e) {
//			return null;
//		}
//	}
//	
//	public void deletebook(int id) {
//		brepo.deleteById(id);
//	}
//
//
//}

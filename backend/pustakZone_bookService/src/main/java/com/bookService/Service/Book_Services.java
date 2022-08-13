package com.bookService.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookService.Bean.Book;
import com.bookService.Repository.BookRepo;
import com.bookService.Repository.OrderRepository;

@Service
public class Book_Services {
//	--------------------------------------------------Books-------------------------------------------------------
	@Autowired
	private BookRepo brepo;
	
	@Autowired
	private OrderRepository orepo;
	
	public Book addBook(Book b) {
		try {
			try {
				brepo.findById(b.getbId()).get();
			}
			catch (Exception e) {
				return brepo.save(b);
			}
			return null;
		}
		catch (Exception e) {
			return null;
		}
	}
	
	public Book getBookById(int id) {
		try {
			return brepo.findById(id).get();
		}
		catch (Exception e) {
			return null;
		}
	}
	
	public int countBook() {
		return brepo.findAll().size();
	}
	
	public List<Book> getAllBook(){
		try {
			return brepo.findAll();
			
		}
		catch (Exception e) {
			return null;
		}
	}
	
	public void deletebook(int id) {
		orepo.deleteByBid(id);
		brepo.deleteById(id);
	}


}

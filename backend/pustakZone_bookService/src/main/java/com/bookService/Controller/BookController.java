package com.bookService.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bookService.Bean.Book;
import com.bookService.Service.Book_Services;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class BookController {
//	public static String uploadDirectory = System.getProperty("user.dir") + "/src/main/static/files";
	@Autowired
	private Book_Services service;

//	@Autowired
//	private FileUploadHelper fiHelper;

//	creating book------------------------------------------------------------------
//	@PostMapping("/books")
//	public ResponseEntity<String> createBook(@ModelAttribute Book book) throws IOException {
//
//		boolean f = fiHelper.uploadFile(file);
//		if (f == true) {
//			book.setbImage(file.getOriginalFilename());
//			service.addBook(book);
//			return ResponseEntity.ok("file successfully uploaded");
//		}
//
//		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("something bad has happend");
//
//	}
	
	@PostMapping("/book")
	public ResponseEntity<String> addBook(@RequestBody Book book) {
		System.out.println(book);
		Book b=service.addBook(book);
		if(b!=null) {
			return ResponseEntity.status(HttpStatus.OK).body("Book Added Successfully");
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("something went wrong");
	}

//	getting all books------------------------------------------
	@GetMapping("/book")
	public List<Book> getAllbooks() {
		
		return service.getAllBook();
	}
	
	@GetMapping("/count-book")
	public String countBook() {
		return service.countBook()+"";
	}

//	get book by id------------------------------------
	@GetMapping("/book/{id}")
	public Book getBook(@PathVariable int id) {
		try {
			Book b = service.getBookById(id);
			System.out.println(b);
			return b;
		}
		catch (Exception e) {
			return null;
		}
		
	}
//	delete book by id
	@DeleteMapping("/book/{id}")
	public void deleteBook(@PathVariable int id){
			service.deletebook(id);
	}
	
	

}

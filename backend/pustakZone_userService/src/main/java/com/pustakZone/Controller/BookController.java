//package com.pustakZone.Controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.ModelAttribute;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.pustakZone.Services.Book_Services;
//import com.pustakZone.bean.Book;
//
//
//@RestController
//@CrossOrigin
//public class BookController {
////	public static String uploadDirectory = System.getProperty("user.dir") + "/src/main/static/files";
//	@Autowired
//	private Book_Services service;
//
//	@Autowired
////	private FileUploadHelper fiHelper;
//
////	creating book------------------------------------------------------------------
////	@PostMapping("/books")
////	public ResponseEntity<String> createBook(@ModelAttribute Book book) throws IOException {
////
////		boolean f = fiHelper.uploadFile(file);
////		if (f == true) {
////			book.setbImage(file.getOriginalFilename());
////			service.addBook(book);
////			return ResponseEntity.ok("file successfully uploaded");
////		}
////
////		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("something bad has happend");
////
////	}
//	
//	@PostMapping("/books")
//	public String addBook(@ModelAttribute Book book) {
//		Book b=service.addBook(book);
//		if(b!=null) {
//			return "Book Uploaded successfully";
//		}
//		return "something went wrong";
//	}
//
////	getting all books------------------------------------------
//	@GetMapping("/books")
//	public List<Book> getAllbooks() {
//		
//		return service.getAllBook();
//	}
//
////	get book by id------------------------------------
//	@GetMapping("/books/{id}")
//	public Book getBook(@PathVariable int id) {
//		try {
//			Book b = service.getBookById(id);
//			System.out.println(b);
//			return b;
//		}
//		catch (Exception e) {
//			return null;
//		}
//		
//	}
////	delete book by id
//	@DeleteMapping("/books/{id}")
//	public ResponseEntity<Book> deleteBook(@PathVariable int id){
//		try {
//			service.deletebook(id);
//			return new ResponseEntity<Book>(HttpStatus.OK);
//		}
//		catch(Exception e) {
//			return new ResponseEntity<Book>(HttpStatus.NOT_FOUND);
//		}
//	}
//	
//	
//
//}

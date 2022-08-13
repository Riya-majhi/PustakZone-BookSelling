package com.bookService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class BookServiceApplication {

	public static void main(String[] args) {
		
//		new java.io.File(BookController.uploadDirectory).mkdir();

		SpringApplication.run(BookServiceApplication.class, args);
	}

}

package com.bookService.Helper;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class FileUploadHelper {
	private final String upload_dir="C:\\Users\\sathi\\OneDrive\\Desktop\\Projects\\Office_project\\React_2\\pustak-zone\\public\\assets\\uploaded_image";
	
	public boolean uploadFile(MultipartFile file) {
		boolean f=false;
		try {
			Files.copy(file.getInputStream(), Paths.get(upload_dir+File.separator+file.getOriginalFilename()),StandardCopyOption.REPLACE_EXISTING);
			f=true;
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return f;
	}
	
}

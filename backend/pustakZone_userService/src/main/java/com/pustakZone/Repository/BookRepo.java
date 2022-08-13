package com.pustakZone.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pustakZone.bean.Book;


@Repository
public interface BookRepo extends JpaRepository<Book, Integer> {

}

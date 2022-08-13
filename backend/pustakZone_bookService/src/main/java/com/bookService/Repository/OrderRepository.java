package com.bookService.Repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.bookService.Bean.OrderBook;


@Repository
public interface OrderRepository extends JpaRepository<OrderBook, Integer> {
	
	@Transactional
	@Modifying
	@Query(" delete from OrderBook o where o.bId=?1 ")
	void deleteByBid(int bId);
}

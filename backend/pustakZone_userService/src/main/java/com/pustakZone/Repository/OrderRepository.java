package com.pustakZone.Repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.pustakZone.bean.OrderBook;


@Repository
public interface OrderRepository extends JpaRepository<OrderBook, Integer> {
	@Transactional
	@Modifying
	@Query("delete from OrderBook o where o.uId=?1" )
	void deleteByUserId(String uid);

}

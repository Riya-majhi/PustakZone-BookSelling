package com.pustakZone.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pustakZone.bean.Users;


@Repository
public interface UserRepo extends JpaRepository<Users,String>   {

	
	}


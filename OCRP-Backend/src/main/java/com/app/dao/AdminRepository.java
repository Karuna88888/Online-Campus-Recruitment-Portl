package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {

	// to get admin by email & password (to authenticate admin)
	@Query("select a from Admin a where a.adminEmail =:email and a.adminPassword =:password")
	public Admin findByEmailAndPassword(@Param("email") String email, @Param("password") String password);

	// to get admin by email for validation
	@Query("select a from Admin a where a.adminEmail =:email")
	public Admin findByEmail(@Param("email") String email);
}

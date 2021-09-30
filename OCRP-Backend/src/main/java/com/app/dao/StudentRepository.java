package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

	    //to get student by email for validation
		//@Query("select s from student s where s.email =:email")
		//public Student findByEmail(@Param("email") String email);
	
		public Student findByEmail(String email);

	Student findByEmailAndPassword(String email, String password);

}

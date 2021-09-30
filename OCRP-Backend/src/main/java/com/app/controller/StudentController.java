package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Job;
import com.app.pojos.Student;
import com.app.services.JobService;
import com.app.services.StudentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/students")
public class StudentController {

	@Autowired
	private StudentService studentService;
	@Autowired
	private JobService jobService;

	@GetMapping
	public ResponseEntity<?> getAllStudents() {
		return ResponseEntity.ok(studentService.getAllStudents());
	}

	@GetMapping("/{sId}")
	public ResponseEntity<?> getStudentById(@PathVariable int sId) {
		return ResponseEntity.ok(studentService.getStudentById(sId));
	}

	@PostMapping
	public ResponseEntity<Student> registerStudent( @RequestBody Student student) {
		return ResponseEntity.ok(studentService.registerStudent( student));
	}

	@PutMapping("/{sId}")
	public ResponseEntity<Student> updateStudent(@PathVariable int sId, @RequestBody Student student) {
		student.setsId(sId);
		Student newStudent = studentService.updateStudent(student);
		return ResponseEntity.ok(newStudent);
//		return ResponseEntity.ok(studentService.updateStudent(sId, student));
	}

	@DeleteMapping("/{sId}")
	public ResponseEntity<?> deleteStudentById(@PathVariable int sId) {
		return ResponseEntity.ok(studentService.deleteStudentById(sId));

	}

	@PostMapping("/applyjob/{sId}")
	public ResponseEntity<?> applyJob(@PathVariable int sId,@RequestBody Job job){
		return ResponseEntity.ok(studentService.applyJob(sId,job));
	}
	
	
}

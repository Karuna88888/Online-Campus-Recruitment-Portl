package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.app.pojos.Admin;
import com.app.services.AdminService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private AdminService adminService;

	// to add admin
	@PostMapping
	public ResponseEntity<Admin> addAdmin(@RequestBody Admin newAdmin) {
		return ResponseEntity.ok(adminService.addAdmin(newAdmin));
	}

	// to get admin id
//	@GetMapping("/{adminId}")
//	public ResponseEntity<Admin> getAdminById(@PathVariable int adminId) {
//		return ResponseEntity.ok(adminService.getAdminById(adminId));
//	}

	// to get all list of all admins
	@GetMapping
	public ResponseEntity<?> getAllAdmins() {
		return ResponseEntity.ok(adminService.getAllAdmins());
	}

	// to delete admin by id
//	@DeleteMapping("/{adminId}")
//	public ResponseEntity<?> deleteAdminById(@PathVariable int adminId) {
//		return ResponseEntity.ok(adminService.deleteAdminById(adminId));
//	}
//*/
	// to update admin
	@PutMapping("/{adminId}")
	public ResponseEntity<?> updateAdmin(@PathVariable int adminId, @RequestBody Admin admin) {
		return ResponseEntity.ok(adminService.updateAdmin(adminId, admin));
	}

	// fetch all companies
	@GetMapping("/company")
	public ResponseEntity<?> fetchAllCompanyDetails() {
		return ResponseEntity.ok(adminService.getAllCompany());
	}

	// fetch all jobs
	@GetMapping("/jobs")
	public ResponseEntity<?> fetchAllJobsDetails() {
		return ResponseEntity.ok(adminService.getAllJobs());
	}

	// fetch all students
	@GetMapping("/students")
	public ResponseEntity<?> fetchAllStudentDetails() {
		return ResponseEntity.ok(adminService.getAllStudents());
	}

	// delete company details
	@DeleteMapping("/company/{cId}")
	public ResponseEntity<HttpStatus> deleteCompany(@PathVariable String cId) {
		try {
			this.adminService.deleteCompany(Integer.parseInt(cId));
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// delete student details
	@DeleteMapping("/students/{sId}")
	public ResponseEntity<HttpStatus> deleteStudent(@PathVariable String sId) {
		try {
			this.adminService.deleteStudent(Integer.parseInt(sId));
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// delete job details
	@DeleteMapping("/jobs/{jId}")
	public ResponseEntity<HttpStatus> deleteJob(@PathVariable String jId) {
		try {
			this.adminService.deleteJob(Integer.parseInt(jId));
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}

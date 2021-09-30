package com.app.controller;

import java.util.List;

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

import com.app.pojos.Company;
import com.app.pojos.Job;
import com.app.services.CompanyService;

import lombok.NonNull;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/company")
public class CompanyController {

	@Autowired
	private CompanyService companyService;
	
	private JobController jobController;

	@GetMapping
	public ResponseEntity<?> getAllCompanies() {
		return ResponseEntity.ok(companyService.getAllCompany());
	}

	@GetMapping("/{cId}")
	public ResponseEntity<?> getCompanyById(@PathVariable int cId) {
		return ResponseEntity.ok(companyService.getCompanyById(cId));
	}

	@PostMapping
	public ResponseEntity<Company> registerCompany( @RequestBody Company company) {
		return ResponseEntity.ok(companyService.registerCompany( company));
	}

	@PutMapping("/{cId}")
	public ResponseEntity<?> updateCompany(@PathVariable int cId, @RequestBody Company company) {
		return ResponseEntity.ok(companyService.updateCompany(cId, company));
	}

	@DeleteMapping("/{cId}")
	public ResponseEntity<?> deleteCompanyById(@PathVariable int cId) {
		return ResponseEntity.ok(companyService.deleteCompanyById(cId));

	}
    @NonNull
	@PostMapping("/postjob/{cId}")
	public ResponseEntity<?> postJob(@PathVariable int cId,@RequestBody Job job) {
		System.out.println("post job " + job);
		return ResponseEntity.ok(companyService.postJob(cId,job));

	}
    
    @PutMapping("/updatejob/{jId}")
	public ResponseEntity<?> updateJob(@PathVariable int jId, @RequestBody Job job) {
		return ResponseEntity.ok(companyService.updateJob(jId, job));
	}
    
    @DeleteMapping("/deletejob/{jId}")
	public ResponseEntity<?> deleteJobById(@PathVariable int jId) {
		return ResponseEntity.ok(companyService.deleteJobById(jId));
     }
    
}

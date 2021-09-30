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
import com.app.services.JobService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/jobs")
public class JobController {

	@Autowired
	private JobService jobService;
	
	@GetMapping
	public ResponseEntity<?> getAllJobs() {
		return ResponseEntity.ok(jobService.getAllJobs());
	}

	
	@GetMapping("/{jId}")
	public ResponseEntity<?> getJobById(@PathVariable int jId) {
		return ResponseEntity.ok(jobService.getJobById(jId));
	}
	
//	@PostMapping
//	public ResponseEntity<Job> registerJob( @RequestBody Job job) {
//		return ResponseEntity.ok(jobService.registerJob(job));
//	}
	
//	@PutMapping("/{jId}")
//	public ResponseEntity<?> updateJob(@PathVariable int jId, @RequestBody Job job) {
//		return ResponseEntity.ok(jobService.updateJob(jId, job));
//	}
	
	
	
//	@DeleteMapping("/{jId}")
//	public ResponseEntity<?> deleteJobById(@PathVariable int jId) {
//		return ResponseEntity.ok(jobService.deleteJobById(jId));
//     }
	
}

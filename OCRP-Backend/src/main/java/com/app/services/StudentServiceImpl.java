package com.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.JobRepository;
import com.app.dao.StudentRepository;
import com.app.exception.UserException;
import com.app.pojos.Job;
import com.app.pojos.Student;

@Service
@Transactional
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentRepository studentRepo;
	@Autowired
	private JobRepository jobRepo;
	
	private JobService jobService;

	@Override
	public List<Student> getAllStudents() {
         return studentRepo.findAll(); 
	}

	@Override
	public Student getStudentById(int sId) {
		Student student = studentRepo.findById(sId).orElseThrow(() -> new UserException("No such student found"));
		return student;
	}

	@Override
	public Student registerStudent(Student student) {
		Student registerStudent = studentRepo.findByEmail(student.getEmail());
		if (registerStudent == null)
			return studentRepo.save(student);
		else
			throw new UserException("student already exists with email id : " + student.getEmail());
	}

	@Override
	public Student updateStudent( Student student) {
//		Student existStudent = studentRepo.findById(sId).orElseThrow(() -> new UserException("No student Found!"));
//		existStudent.setFirstName(student.getFirstName());
//		existStudent.setLastName(student.getLastName());
//		existStudent.setAddress(student.getAddress());
//		existStudent.setContactNo(student.getContactNo());
//		existStudent.setEmail(student.getEmail());
//		existStudent.setPassword(student.getPassword());
//		existStudent.setCgpa(student.getCgpa());
//		existStudent.setYearOfPassing(student.getYearOfPassing());
//		studentRepo.save(existStudent);
		
		
			return studentRepo.save(student);
		
	}

	@Override
	public String deleteStudentById(int sId) {
		Student student = studentRepo.findById(sId).orElseThrow(() -> new UserException("No such student found"));
		studentRepo.delete(student);
		return "student with id:" + sId + " deleted ";
	}

	@Override
	public String applyJob(int sId,Job job) {
//		 List<Job> jobs = jobRepo.findAll();
//		// Student s= studentRepo.getById(sId);
//		 //Job j = jobRepo.getById(jId);
//		 for(Job j: jobs)
//		 {
//			 if(j.getjId()==jId)
//			 {
//				  //j.setApplyJob(student);
//                  jobRepo.save(j);
//			 }
//		 }
		Student s = studentRepo.findById(sId).orElseThrow(()-> new UserException("student not found"));
		s.setApplyJob(job);
		studentRepo.save(s);
		
		
    	 return " student with id: "+s.getsId()+" applied for job: "+job.getName() ;
	}

	

	

}

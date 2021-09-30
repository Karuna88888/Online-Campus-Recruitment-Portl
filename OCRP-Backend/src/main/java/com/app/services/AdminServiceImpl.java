package com.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AdminRepository;
import com.app.dao.CompanyRepository;
import com.app.dao.JobRepository;
import com.app.dao.StudentRepository;
import com.app.exception.UserException;
import com.app.pojos.Admin;
import com.app.pojos.Company;
import com.app.pojos.Job;
import com.app.pojos.Student;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {

	@Autowired
	public AdminRepository adminRepo;
	@Autowired
	public StudentRepository studentRepo;
	@Autowired
	public CompanyRepository companyRepo;
	@Autowired
	public JobRepository jobRepo;
	
	@Override
	public Admin addAdmin(Admin newAdmin) {
		//get admin by email
				Admin admin = adminRepo.findByEmail(newAdmin.getAdminEmail());
				if(admin == null) 
					return adminRepo.save(newAdmin);
				else
					throw new UserException("Admin already exists with email id : " + newAdmin.getAdminEmail());
	}
	
	@Override
	public List<Admin> getAllAdmins() {
		return adminRepo.findAll();
	}
/*
	@Override
	public Admin getAdminById(int adminId) {
		return adminRepo.findById(adminId).orElseThrow(() -> new UserException ("Invalid Admin ID!") );
	}

	@Override
	public String deleteAdminById(int adminId) {
		Admin admin = adminRepo.findById(adminId).orElseThrow(() -> new UserException("No Admin Found!"));
		adminRepo.delete(admin);
		return "Admin with Id: " + adminId + " deleted!";
	}
*/
	@Override
	public String updateAdmin(int adminId, Admin admin) {
		//get existingAdmin from by adminId
				Admin existingAdmin = adminRepo.findById(adminId).orElseThrow(() -> new UserException("No Admin Found!"));
				
				//set admin's fields to the existingAdmin
				existingAdmin.setAdminEmail(admin.getAdminEmail());
				existingAdmin.setAdminPassword(admin.getAdminPassword());
				
				//save admin in DB
				adminRepo.save(existingAdmin);
				return "Admin with Id: " + adminId + " updated!";
	}

	@Override
	public List<?> getAllCompany() {
		return companyRepo.findAll();
	}

	@Override
	public List<?> getAllJobs() {
		return jobRepo.findAll();
	}

	@Override
	public List<?> getAllStudents() {
		return studentRepo.findAll();
	}

	@Override
	public String deleteCompany(int cId) {
		Company company = companyRepo.findById(cId).orElseThrow(() -> new UserException("No Company Found!"));
		companyRepo.delete(company);
		return "Company with Id: " + cId + " deleted!";
	}

	@Override
	public String deleteStudent(int sId) {
		Student student = studentRepo.findById(sId).orElseThrow(() -> new UserException("No Student Found!"));
		studentRepo.delete(student);
		return "Student with Id: " + sId + " deleted!";
	}

	@Override
	public String deleteJob(int jId) {
		Job job = jobRepo.findById(jId).orElseThrow(() -> new UserException("No job Found!"));
		jobRepo.delete(job);
		return "Job with Id: " + jId + " deleted!";
	}

	

}

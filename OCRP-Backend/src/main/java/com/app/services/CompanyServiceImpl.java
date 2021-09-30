package com.app.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CompanyRepository;
import com.app.dao.JobRepository;
import com.app.dao.StudentRepository;
import com.app.exception.UserException;
import com.app.pojos.Company;
import com.app.pojos.Job;

@Service
@Transactional
public class CompanyServiceImpl implements CompanyService {

	@Autowired
	private CompanyRepository companyRepo;

	@Autowired
	private JobRepository jobRepo;

	@Autowired
	private StudentRepository studentRepo;



	@Override
	public Company getCompanyById(int cId) {
		Company company = companyRepo.findById(cId).orElseThrow(() -> new UserException("No such company found"));
		return company;
	}

	@Override
	public Company registerCompany(Company company) {
//		Company registerCompany = companyRepo.findByEmail(company.getEmail());
//		if (registerCompany.equals(company))
//		{
//			throw new UserException("Admin already exists with email id : " + company.getEmail());
//			 
//		}else
//		{
//			companyRepo.save(company);
//			 return company;
//		}
		return companyRepo.save(company);
	}

	@Override
	public String updateCompany(int cId, Company company) {
		Company existCompany = companyRepo.findById(cId).orElseThrow(() -> new UserException("No company Found!"));
		existCompany.setName(company.getName());
		existCompany.setAddress(company.getAddress());
		existCompany.setContactNo(company.getContactNo());
		existCompany.setDescription(company.getDescription());
		existCompany.setEmail(company.getEmail());
		existCompany.setPassword(company.getPassword());
		companyRepo.save(existCompany);
		return "Company with id: " + cId + " Updated";
	}

	@Override
	public String deleteCompanyById(int cId) {
		companyRepo.deleteById(cId);
		return "Company with id: " + cId + " deleted";
	}

	@Override
	public List<Company> getAllCompany() {
		return companyRepo.findAll();
	}

	@Override
	public String postJob(int cId,Job job) {
		Company c = companyRepo.getById(cId) ;		
		c.setPostedJob(job);
	    companyRepo.save(c);
        return "Company with id: "+ cId +" posted job name : "+ job.getName();
	}

	@Override
	public String updateJob(int jId, Job job) {
		Job existJob = jobRepo.findById(jId).orElseThrow(() -> new UserException("No job Found!"));
		existJob.setName(job.getName());
		existJob.setDescription(job.getDescription());
		existJob.setSalary(job.getSalary());
		existJob.setElg_Cgpa(job.getElg_Cgpa());
		existJob.setElg_Yop(job.getElg_Yop());
		jobRepo.save(existJob);
		return "job with id: " + jId + " Updated";
		
	}

	@Override
	public String deleteJobById(int jId) {
		Job job = jobRepo.findById(jId).orElseThrow(() -> new UserException("No such job found"));
		jobRepo.delete(job);
		return "job with id:" + jId + " deleted ";
	}
	
	

}

/*
 * Company c= companyRepo.findById(cId).orElseThrow(() -> new
 * UserException("Company not found")); job.setCompany(c); List<Job>
 * jobList1=jobRepo.findAll(); System.out.println(job);
 * 
 * List<Job> jobList2=jobRepo.findAllById(job.jId); for(Job j : jobList1 ) {
 * if(j.getCompany().equals(c)) jobList2.add(job); } c.setPostedJobId(jobList2);
 * return jobRepo.save(job);
 */

package com.app.services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.app.pojos.Company;
import com.app.pojos.Job;

public interface CompanyService {

	public Company getCompanyById(int cId);

	public Company registerCompany(Company company);

	public String updateCompany(int cId, Company company);

	public String deleteCompanyById(int cId);

	public List<Company> getAllCompany();

	public String postJob(int cId,Job job);

	public String updateJob(int jId, Job job);

	public String deleteJobById(int jId);

	
}

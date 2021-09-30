package com.app.services;

import java.util.List;

import com.app.pojos.Admin;

public interface AdminService {

	public Admin addAdmin(Admin newAdmin);

	//public Admin getAdminById(int adminId);

	public List<Admin> getAllAdmins();

	//public String deleteAdminById(int adminId);

	public String updateAdmin(int adminId, Admin admin);

	public List<?> getAllCompany();

	public List<?> getAllJobs();

	public List<?> getAllStudents();

	public String deleteCompany(int cId);

	public String deleteStudent(int sId);

	public String deleteJob(int jId);

	

}

package com.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AdminRepository;
import com.app.dao.CompanyRepository;
import com.app.dao.StudentRepository;
import com.app.exception.UserException;
import com.app.pojos.Admin;
import com.app.pojos.Company;
import com.app.pojos.Student;
import com.app.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private AdminRepository adminRepo;

	@Autowired
	private StudentRepository studentRepo;

	@Autowired
	private CompanyRepository companyRepo;

	@Override
	public User authenticateUser(User user) {

		// get user's fields from the user object
		String role = user.getRole();
		String email = user.getEmail();
		String password = user.getPassword();

		// checking the role of user(admin)
		if (role.equals("admin")) {

			// if role is admin : save it in the asmin object
			Admin admin = adminRepo.findByEmailAndPassword(email, password);

			// check if admin exists
			if (admin != null)
				return user;
			else

				// if admin does not exists : throw exception
				throw new UserException("Wrong Credentials for Admin!");
		}

		// checking the role of user (student)
		if (role.equals("student")) {

			// if the role is student : save it in student object
			Student student = studentRepo.findByEmailAndPassword(email, password);

			// check if student exists
			if (student != null)
				return user;
			else

				// if student does not exists : throw exception
				throw new UserException("Wrong Credentials for Student!");
		}

		// checking the role of user (company)
		if (role.equals("company")) {

			// if the role is company : save it in the company object
			Company company = companyRepo.findByEmailAndPassword(email, password);

			// check if company exists
			if (company != null)
				return user;
			else

				// if company does not exists : throw exception
				throw new UserException("Wrong Credentials for Company!");
		} else

			// if user does not exists : throw exception
			throw new UserException("User does not exists!");
	}

}

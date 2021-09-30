package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(length = 20)
	private String email;
	@Column(length = 20)
	private String password;
	@Column(length = 20)
	private String role;
	@OneToOne
	@JoinColumn(name = "sid")
	private Student student;
	@OneToOne
	@JoinColumn(name = "cid")
	private Company company;
	@OneToOne
	@JoinColumn(name = "adminId")
	private Admin admin;
	

	public User() {
		System.out.println("In User's para-less Constructor!");

	}

	
	public User(int id,  String email, String password, String role) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		this.role = role;
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	
	

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	

	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}


	@Override
	public String toString() {
		return "User [id=" + id + ", email=" + email + ", password=" + password + ", role=" + role + ", student="
				+ student + ", company=" + company + ", admin=" + admin + "]";
	}


     


}

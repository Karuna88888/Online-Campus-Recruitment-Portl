package com.app.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "admin")
public class Admin {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int adminId;

	@Column
	private String adminEmail;

	@Column
	private String adminPassword;
	@OneToOne(mappedBy = "admin", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "uid")
	@JsonIgnore
	private User user;

	public Admin() {
		System.out.println("In Admin's para-less Constructor!");
	}

	public Admin(int adminId, String adminEmail, String adminPassword, User user) {
		super();
		this.adminId = adminId;
		this.adminEmail = adminEmail;
		this.adminPassword = adminPassword;
		this.user = user;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public void setAdminId(int adminId) {
		this.adminId = adminId;
	}

	public Integer getAdminId() {
		return adminId;
	}

	public void setAdminId(Integer adminId) {
		this.adminId = adminId;
	}

	public String getAdminEmail() {
		return adminEmail;
	}

	public void setAdminEmail(String adminEmail) {
		this.adminEmail = adminEmail;
	}

	public String getAdminPassword() {
		return adminPassword;
	}

	public void setAdminPassword(String adminPassword) {
		this.adminPassword = adminPassword;
	}

	@Override
	public String toString() {
		return "Admin [adminId=" + adminId + ", adminEmail=" + adminEmail + ", adminPassword=" + adminPassword
				+ ", user=" + user + "]";
	}

}

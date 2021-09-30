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
@Table(name = "company")
public class Company {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cId;
	@Column(name = "name", length = 20)
	private String name;
	@Column(name = "descpt", length = 40)
	private String description;
	@Column(name = "email", length = 20, unique = true)
	private String email;
	@Column(name = "contact_no", length = 15)
	private String contactNo;
	@Column(name = "password", length = 20, unique = true)
	private String password;
	@Column(name = "address", length = 20)
	private String address;
//	@OneToMany(mappedBy = "postJob", cascade = CascadeType.ALL, orphanRemoval = true)
//	@JsonIgnoreProperties("postJob")
//	@JsonIgnore
//	private List<Job> postedJob = new ArrayList<>();

//	@OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
//	@JoinColumn(name = "company_job_id", referencedColumnName = "job_id", insertable = true, updatable = true)
//	@JsonIgnore
//	private Job postJob;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "company_job_id", nullable = true)
	@JsonIgnore
	private Job postedJob;
	
	@OneToOne(mappedBy = "company", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "uid")
	@JsonIgnore
	private User user;

	public Company() {
		System.out.println("In Company's para-less Constructor!");

	}

//	public List<Job> getPostedJob() {
//		return postedJob;
//	}
//
//	public void setPostedJob(List<Job> postedJob) {
//		this.postedJob = postedJob;
//	}

	

	public Job getPostedJob() {
		return postedJob;
	}

	public Company(int cId, String name, String description, String email, String contactNo, String password,
		String address, Job postedJob, User user) {
	super();
	this.cId = cId;
	this.name = name;
	this.description = description;
	this.email = email;
	this.contactNo = contactNo;
	this.password = password;
	this.address = address;
	this.postedJob = postedJob;
	this.user = user;
}

	public void setPostedJob(Job postedJob) {
		this.postedJob = postedJob;
	}

	public int getcId() {
		return cId;
	}

	public void setcId(int cId) {
		this.cId = cId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	
	

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Company [cId=" + cId + ", name=" + name + ", description=" + description + ", email=" + email
				+ ", contactNo=" + contactNo + ", password=" + password + ", address=" + address + ", postedJob="
				+ postedJob + ", user=" + user + "]";
	}

	

}

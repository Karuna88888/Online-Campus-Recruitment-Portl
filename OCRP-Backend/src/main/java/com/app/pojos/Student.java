package com.app.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "student")
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int sId;
	@Column(name = "first_name", length = 20)
	private String firstName;
	@Column(name = "last_name", length = 20)
	private String lastName;
	@Column(name = "email", length = 20, unique = true)
	private String email;
	@Column(name = "contact_no", length = 10)
	private String contactNo;
	@Column(name = "password", length = 20, unique = true)
	private String password;
	@Column(name = "address", length = 20)
	private String address;
	@Column(name = "cgpa", nullable = true)
	private double cgpa;
	@Column(name = "yop")
	private int yearOfPassing;
	/*************************/
//	@OneToMany(mappedBy = "applyJob", cascade = CascadeType.ALL, orphanRemoval = true)
//	@JsonIgnoreProperties("applyJob")
//	@JsonIgnore
//	private List<Job> appliedJob = new ArrayList<>();
	/****************************/
//	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
//	@JoinTable(name = "student_job", joinColumns = { @JoinColumn(name = "s_id") }, 
//	                    inverseJoinColumns = {@JoinColumn(name = "j_id") })
//	@JsonIgnore
//	private List<Job> jobs = new ArrayList<>();

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "student_job_id", nullable = true)
	@JsonIgnoreProperties("student")
	@JsonIgnore
	private Job applyJob;
	
	@OneToOne(mappedBy = "student", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "uid")
	@JsonIgnore
	private User user;

	public Student() {
		System.out.println("In Job's para-less Constructor!");

	}

	

public Student(int sId, String firstName, String lastName, String email, String contactNo, String password,
			String address, double cgpa, int yearOfPassing, Job applyJob, User user) {
		super();
		this.sId = sId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.contactNo = contactNo;
		this.password = password;
		this.address = address;
		this.cgpa = cgpa;
		this.yearOfPassing = yearOfPassing;
		this.applyJob = applyJob;
		this.user = user;
	}



//	public List<Job> getAppliedJob() {
//		return appliedJob;
//	}
//
//	public void setAppliedJob(List<Job> appliedJob) {
//		this.appliedJob = appliedJob;
//	}

	public Job getApplyJob() {
		return applyJob;
	}

	public void setApplyJob(Job applyJob) {
		this.applyJob = applyJob;
	}

	public int getsId() {
		return sId;
	}

	public void setsId(int sId) {
		this.sId = sId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
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

	public double getCgpa() {
		return cgpa;
	}

	public void setCgpa(double cgpa) {
		this.cgpa = cgpa;
	}

	public int getYearOfPassing() {
		return yearOfPassing;
	}

	public void setYearOfPassing(int yearOfPassing) {
		this.yearOfPassing = yearOfPassing;
	}
	
	

	public User getUser() {
		return user;
	}



	public void setUser(User user) {
		this.user = user;
	}



	@Override
	public String toString() {
		return "Student [sId=" + sId + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", contactNo=" + contactNo + ", password=" + password + ", address=" + address + ", cgpa=" + cgpa
				+ ", yearOfPassing=" + yearOfPassing + ", applyJob=" + applyJob + ", user=" + user + "]";
	}



	

}

package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "job")
public class Job {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer jId;
	@Column(name = "name", length = 20)
	private String name;
	@Column(name = "descpt", length = 40)
	private String description;
	@Column(name = "sal")
	private double salary;
	private double elg_Cgpa;
	private int elg_Yop;
	/**************************/
//	@ManyToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "student_job_id", nullable = true)
//	@JsonIgnoreProperties("appliedJob")
//	@JsonIgnore
//	private Student applyJob;
	/*************************/
//	@ManyToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "company_job_id", nullable = true)
//	@JsonIgnoreProperties("postedJob")
//	@JsonIgnore
//	private Company postJob;

	@OneToMany(mappedBy = "applyJob", cascade = CascadeType.ALL)
	@JsonIgnoreProperties("applyJob")
	@JsonIgnore
	private List<Student> student = new ArrayList<>();

	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "postedJob")
	@JsonIgnore
	private Company companyJob;

	public Job() {
		System.out.println("In Job's para-less Constructor!");
	}

	public Job(int jId) {

	}

	public Job(Integer jId, String name, String description, double salary, double elg_Cgpa, int elg_Yop,
			List<Student> student, Company companyJob) {
		super();
		this.jId = jId;
		this.name = name;
		this.description = description;
		this.salary = salary;
		this.elg_Cgpa = elg_Cgpa;
		this.elg_Yop = elg_Yop;
		this.student = student;
		this.companyJob = companyJob;
	}

//	public Student getApplyJob() {
//		return applyJob;
//	}
//
//	public void setApplyJob(Student applyJob) {
//		this.applyJob = applyJob;
//	}

//	public Company getPostJob() {
//		return postJob;
//	}
//
//	public void setPostJob(Company postJob) {
//		this.postJob = postJob;
//	}

	public Integer getjId() {
		return jId;
	}

	public void setjId(Integer jId) {
		this.jId = jId;
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

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	public double getElg_Cgpa() {
		return elg_Cgpa;
	}

	public void setElg_Cgpa(double elg_Cgpa) {
		this.elg_Cgpa = elg_Cgpa;
	}

	public int getElg_Yop() {
		return elg_Yop;
	}

	public void setElg_Yop(int elg_Yop) {
		this.elg_Yop = elg_Yop;
	}

	public List<Student> getStudent() {
		return student;
	}

	public void setStudent(List<Student> student) {
		this.student = student;
	}

	public Company getCompanyJob() {
		return companyJob;
	}

	public void setCompanyJob(Company companyJob) {
		this.companyJob = companyJob;
	}

	@Override
	public String toString() {
		return "Job [jId=" + jId + ", name=" + name + ", description=" + description + ", salary=" + salary
				+ ", elg_Cgpa=" + elg_Cgpa + ", elg_Yop=" + elg_Yop + ", student=" + student + ", companyJob="
				+ companyJob + "]";
	}

}

package com.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.JobRepository;
import com.app.exception.UserException;
import com.app.pojos.Job;

@Service
@Transactional
public class JobServiceImpl implements JobService {

	@Autowired
	private JobRepository jobRepo;

	@Override
	public List<Job> getAllJobs() {
		return jobRepo.findAll();
	}

	@Override
	public Job getJobById(int jId) {
		Job job = jobRepo.findById(jId).orElseThrow(() -> new UserException("No such job found"));
		return job;
	}

//	@Override
//	public Job registerJob(Job job) {
//		Job registerJob = jobRepo.findByName(job.getName());
//		if (registerJob == null)
//			return jobRepo.save(job);
//		else
//			throw new UserException("job already exists with name : " + job.getName());
//	}

//	@Override
//	public String updateJob(int jId, Job job) {
//		Job existJob = jobRepo.findById(jId).orElseThrow(() -> new UserException("No job Found!"));
//		existJob.setName(job.getName());
//		existJob.setDescription(job.getDescription());
//		existJob.setSalary(job.getSalary());
//		existJob.setElg_Cgpa(job.getElg_Cgpa());
//		existJob.setElg_Yop(job.getElg_Yop());
//		jobRepo.save(existJob);
//		return "job with id: " + jId + " Updated";
//	}

//	@Override
//	public String deleteJobById(int jId) {
//		Job job = jobRepo.findById(jId).orElseThrow(() -> new UserException("No such job found"));
//		jobRepo.delete(job);
//		return "job with id:" + jId + " deleted ";
//
//	}

//	@Override
//	public void addEligibilty(int jId,double elg_Cgpa, int elg_Yop) {
//		if(jobRepo.existsById(jId))
//		{
//		    Job j = jobRepo.getById(jId);
//			if(elg_Cgpa<10 && elg_Yop<2021)
//			{
//				j.setElg_Cgpa(elg_Cgpa);
//				j.setElg_Yop(elg_Yop);
//				jobRepo.save(j);
//			}
//			else {
//				throw new UserException("Invalid cgpa and yop");
//			}
//		}
//		else {
//			throw new UserException("Job doesn't exists");
//		}
//	}

}

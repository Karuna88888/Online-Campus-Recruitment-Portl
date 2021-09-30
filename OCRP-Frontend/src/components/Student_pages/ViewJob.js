import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminService from '../../Services/AdminService';
import StudentService from '../../Services/StudentService'; 
class ViewJob extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            job:[],
            sId:this.props.match.params.sId,
            student:[],
            
        };
    
        this.applyJob = this.applyJob.bind(this);
    }
    
     
    componentDidMount() {
        AdminService.viewJob().then((res) => {
          this.setState({ job: res.data });
        });

    }

        applyJob(sId) {
            StudentService.applyJob(sId).then((res) => {
              this.setState({
                student: this.state.student.filter((student) => student.sId !== sId),
                
              });
              alert('Successfully Applied for job');
            });
        
        
          
      }
    
    render() {
        return (
          <div>
           
            <div className="container">
              <h2 className="text-center">ALL JOBS</h2>
                <div className="alljobs"></div>
                <table className="table table-striped table-bordered table-secondary">
                <thead>
                  <tr className="table-dark">
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Package</th>
                    <th scope="col">Year of Passing</th>
                    <th scope="col">CGPA</th>
                    <th scope="col">Apply Job</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.job
                    .map((job) => (
                      <tr key={job.jId}>
                        <td>{job.jId}</td>
                        <td>{job.name}</td>
                        <td>{job.description}</td>
                        <td>{job.salary}</td>
                        <td>{job.elg_Yop}</td>
                        <td>{job.elg_Cgpa}</td>
                        <td>
                        <button
                          onClick={() => this.applyJob(this.state.student.sId)}
                          className="btn btn-primary" style={{marginLeft: "10px"}}
                        >APPLY</button>
                        </td>
                      </tr>
                    ))}
    
                   </tbody>       
                </table>
                <div>
            <div>
            <Link to="/student_Homepage" className="btn btn-secondary me-md-2"  style={{margin: "2px"}}> Back </Link>
          </div>
          <div>
            <Link to="/student_Login" className="btn btn-warning me-md-2"  style={{margin: "2px"}}> Log out </Link>
          </div>
            </div>
            </div>
            </div>
        )
    }
}

export default ViewJob;

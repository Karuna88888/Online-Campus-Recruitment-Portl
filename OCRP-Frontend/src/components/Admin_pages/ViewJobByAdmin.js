import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminService from '../../Services/AdminService';

class ViewJobByAdmin extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            job:[],
        };
    
        
    }
    
     
    componentDidMount() {
        AdminService.viewJob().then((res) => {
          this.setState({ job: res.data });
        });

    }

        deleteJobById(jId) {
            AdminService.deleteJobById(jId).then((res) => {
              this.setState({
                job: this.state.job.filter((job) => job.jId !== jId),
              });
              alert("Job deleted successfully..!!");
            });
        
        
          
      }
    
    render() {
        return (
            <div className="container">
              
              <h3 className="text-center">All Jobs</h3>
                <div>
                <table className="table table-striped table-bordered table-secondary">
                <thead>
                  <tr className="table-dark">
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Package</th>
                    <th scope="col">Year of Passing</th>
                    <th scope="col">CGPA</th>
                    <th scope="col">Delete Job</th>
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
                          onClick={() => this.deleteJobById(job.jId)}
                          className="btn btn-danger" style={{margin:"10px"}}
                        >DELETE</button>
                        </td>
                      </tr>
                    ))}
    
                   </tbody>       
                </table>
                <div>
              <Link to="/admin_Homepage" className="btn btn-secondary me-md-2" style={{margin:"2px"}}> Back </Link>
              </div>
              <div>
              <Link to="/admin_Login" className="btn btn-warning me-md-2" style={{margin:"2px"}}> Log out </Link>
              </div>
                </div>
            </div>
        )
    }
}

export default ViewJobByAdmin;

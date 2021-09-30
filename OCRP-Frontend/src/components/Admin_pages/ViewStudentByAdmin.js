import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminService from '../../Services/AdminService';

class ViewStudentByAdmin extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            student:[],
        }
    
        
    }
    
     
    componentDidMount() {
        AdminService.viewStudent().then((res) => {
          this.setState({ student: res.data });
        });

    }

        deleteStudentById(sId) {
            AdminService.deleteStudentById(sId).then((res) => {
              this.setState({
                student: this.state.student.filter((student) => student.sId !== sId),
              });
              alert("Student deleted successfully..!!");
            });
        
        
          
      }
    
    render() {
        return (

             
            <div className="container">
              
              <h3 className="text-center">All Students</h3>
                <table className="table table-striped table-bordered table-secondary">

                <thead>
                  <tr className="table-dark">
                    <th scope="col">Id</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact Number</th>
                    <th scope="col">Address</th>
                    <th scope="col">Year of Passing</th>
                    <th scope="col">CGPA</th>
                    <th scope="col">Delete Student</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.student
                    .map((student) => (
                      <tr>
                        <td>{student.sId}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.email}</td>
                        <td>{student.contactNo}</td>
                        <td>{student.address}</td>
                        <td>{student.yearOfPassing}</td>
                        <td>{student.cgpa}</td>
                        <td>
                        <button
                          onClick={() => this.deleteStudentById(student.sId)}
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
        )
    }
}

export default ViewStudentByAdmin;

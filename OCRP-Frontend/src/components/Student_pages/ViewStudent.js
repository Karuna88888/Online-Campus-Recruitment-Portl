import React,{Component} from "react";
import { Link } from "react-router-dom";
import StudentService from "../../Services/StudentService";

class ViewStudent extends Component {
     
    constructor(props){
         super(props)
        // const sId=sessionStorage.getItem("sId");
         this.state = {
               
               sId:this.props.match.params.sId,
               student:[]
              }

         

    }

    componentDidMount() {
        StudentService.getStudentById(this.state.sId).then((res) => {
          this.setState({ student: res.data });
        });
    
    }

    

    render() {
        return (
            <div className="container">
              <div className="card col-md-6 offset-md-3"></div>
              <div>
            <Link to="/student_Homepage" className="btn btn-secondary me-md-2"  style={{margin: "2px"}}> Back </Link>
          </div>
          <div>
            <Link to="/student_Login" className="btn btn-warning me-md-2"  style={{margin: "2px"}}> Log out </Link>
          </div>
                <div className="allstudents"></div>
                <h2 className="text-center">Profile</h2>
                <div className="card-body"></div>
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
                    {/* <th scope="col">Delete Student</th> */}
                  </tr>
                </thead>
                <tbody>
                  
                      <tr>
                        <td>{this.state.student.sId}</td>
                        <td>{this.state.student.firstName}</td>
                        <td>{this.state.student.lastName}</td>
                        <td>{this.state.student.email}</td>
                        <td>{this.state.student.contactNo}</td>
                        <td>{this.state.student.address}</td>
                        <td>{this.state.student.yearOfPassing}</td>
                        <td>{this.state.student.cgpa}</td>
                      </tr>
                    
    
                   </tbody>       
                </table>
            </div>
        )
    }
}

export default ViewStudent;
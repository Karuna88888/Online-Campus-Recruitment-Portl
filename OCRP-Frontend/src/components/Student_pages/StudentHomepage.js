import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import StudentService from '../../Services/StudentService';

class StudentHomepage extends Component {
  
  constructor(props) {
    super(props)
     //const sId = sessionStorage.getItem("sId");


    this.state = {
         
         student:[],
         sId:this.props.match.params.sId
         // sId:sId
        }

   
     this.deleteStudentById = this.deleteStudentById.bind(this)
      this.updateStudent = this.updateStudent.bind(this);
      this.getStudentById = this.getStudentById.bind(this);
    }

  
 
  componentDidMount() {
  StudentService.getAllStudent().then((res) => {
    this.setState({ student: res.data });
  });
}

 
  updateStudent(sId){
    this.props.history.push(`/update_Student/${sId}`);
 }

  getStudentById(sId){
    this.props.history.push(`/view_profile/${sId}`);
  }
  

  deleteStudentById(sId) {
    StudentService.deleteStudentById(sId).then((res) => {
      this.setState({student:this.state.student.filter(student => student.sId !== sId)});
      alert("Account Deleted Successfully")
      window.location("/homepage");
    })
  }





  render() {
    return (
      <div>

        <div className="container">
   
          
          <div>
            <div>
            <button onClick={()=> this.updateStudent(this.state.student.sId)} className="btn btn-info" style={{margin: "10px"}}>Update profile</button> 
           
            {/* <div>
              <button onClick={() => this.deleteStudentById(this.state.student.sId)}  className="btn btn-danger " style={{margin: "10px"}}> Delete Account </button>
            </div> */}
            {/* <div>
            <Link to="/homepage" className="btn btn-warning me-md-2" style={{margin: "10px"}}> Delete profile </Link>
          </div> */}

           
              <Link to="/viewjob_student" className="btn btn-success me-md-2" style={{margin: "10px"}}> View Jobs </Link>
            
            {/* <div>
            <button onClick={() => this.getStudentById(this.state.student.sId)}  className="btn btn-info " style={{margin: "10px"}}> View profile </button>
            </div> */}
          
            <Link to="/student_Login" className="btn btn-secondary me-md-2" style={{margin: "1px"}}> Back </Link>
         
            <Link to="/homepage" className="btn btn-warning me-md-2" style={{margin: "1px"}}> Log out </Link>
          </div>
        </div>
       
        <img src="./images/stud.jpg" height="360px"/>
        </div>
        
      </div>
    )
  }
}

export default StudentHomepage;

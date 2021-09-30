import React, { Component } from 'react'
import StudentService from '../../Services/StudentService';

 class UpdateStudent extends Component {

  constructor(props) {
      super(props)
     // const sId=sessionStorage.getItem("sId") ;
      this.state = {
         
          sId:this.props.match.params.sId ,
          firstName:" ",
          lastName:" ",
          contactNo:" ",
          address:" ",
          cgpa:" ",
          yearOfPassing:" "
      }
  
      this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this); 
      this.changeLastNameHandler = this.changeLastNameHandler.bind(this); 
      this.changeContactNoHandler = this.changeContactNoHandler.bind(this);
      this.changeAddressHandler = this.changeAddressHandler.bind(this);  
      this.changeCgpaHandler = this.changeCgpaHandler.bind(this);
      this.changeYopHandler = this.changeYopHandler.bind(this);  
      this.updateStudent = this.updateStudent.bind(this);
  }
  
   

   changeFirstNameHandler = (event) => {
    this.setState({
        firstName: event.target.value
    });
}


 
changeLastNameHandler = (event) => {
    this.setState({
        lastName: event.target.value
    });
}

changeContactNoHandler = (event) => {
    this.setState({
        contactNo: event.target.value
    });
}

changeAddressHandler = (event) => {
    this.setState({
        address: event.target.value
    });
}

changeYopHandler = (event) => {
    this.setState({
        yearOfPassing: event.target.value
    });
}

changeCgpaHandler = (event) => {
    this.setState({
        cgpa: event.target.value
    });

}

      componentDidMount(){
          StudentService.getStudentById(this.state.sId).then((res) =>{  
      let studentDetails = res.data;
           this.setState({
                firstName:studentDetails.firstName,
                lastName:studentDetails.lastName,
                contactNo:studentDetails.contactNo,
                yearOfPassing:studentDetails.yearOfPassing,
                cgpa:studentDetails.cgpa,
                address:studentDetails.address
           })
          
          
          });
      
    }
    updateStudent = (e)=>{
        alert('Successfully updated');
        e.preventDefault();
        let studentDetails = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            contactNo : this.state.contactNo,
            cgpa : this.state.cgpa,
            address : this.state.address,
            yearOfPassing : this.state.yearOfPassing
         }
        console.log('studentDetails =>'+JSON.stringify(studentDetails));
        console.log('sId =>'+JSON.stringify(this.state.sId));
        StudentService.updateStudentById(this.state.sId,studentDetails).then((res)=>{
        alert('Successfully updated');
        this.props.history.push('/student_Homepage');
   })
    
    
  }

  cancel(){
    this.props.history.push('/student_Homepage');
}
  
    
    render() {
        return (
            <div>
                <div className="form-data" >
             <h2> Update Profile </h2>
<div className="form-floating mb-3">
  <input type="firstName" className="form-control" id="floatingInput" placeholder="first name" 
  value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
  <label for="floatingInput">First Name</label>
</div>
<div className="form-floating mb-3">
  <input type="lastName" className="form-control" id="floatingInput" placeholder="last name"
  value={this.state.lastName} onChange={this.changeLastNameHandler}/>
  <label for="floatingPassword">Last Name</label>
</div> 
<div className="form-floating mb-3">
  <input type="contactNo" className="form-control" id="floatingInput" placeholder="XXXXXX1234"
  value={this.state.contactNo} onChange={this.changeContactNoHandler}/>
  <label for="floatingInput">Contact Number</label>
</div>
<div className="form-floating mb-3">
  <input type="address" className="form-control" id="floatingInput" placeholder="ex. pune"
  value={this.state.address} onChange={this.changeAddressHandler}/>
  <label for="floatingPassword">Address</label>
</div>
<div className="form-floating mb-3">
  <input type="cgpa" className="form-control" id="floatingInput" placeholder="ex. 8.0"
  value={this.state.cgpa} onChange={this.changeCgpaHandler}/>
  <label for="floatingInput">CGPA</label>
</div>
<div className="form-floating mb-3">
  <input type="yearOfPassing" className="form-control" id="floatingInput" placeholder="ex. 2020"
  value={this.state.yearOfPassing} onChange={this.changeYopHandler}/>
  <label for="floatingPassword">Year Of Passing</label>
</div>
<div class="d-grid gap-2 col-6 mx-auto">
<button className="btn btn-success me-md-2" type="submit" value="Update" onClick={this.updateStudent} style={{margin:"10px"}}> Update </button>
<button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
</div>
</div>           
</div>
        )
    }


}

export default UpdateStudent;
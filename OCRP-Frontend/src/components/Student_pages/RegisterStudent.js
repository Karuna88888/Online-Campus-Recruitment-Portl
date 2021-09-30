import React, { Component } from 'react'
import StudentService from '../../Services/StudentService';

 class RegisterStudent extends Component {

  constructor(props) {
      super(props)
  
      this.state = {
          role:"student",
         //sId:this.props.match.param.sId ,
          firstName:" ",
          lastName:" ",
          email:" ",
          password:" ",
          contactNo:" ",
          address:" ",
          cgpa:" ",
          yearOfPassing:" "
      }
  
      this.changePasswordHandler = this.changePasswordHandler.bind(this)
      this.changeEmailHandler = this.changeEmailHandler.bind(this); 
      this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this); 
      this.changeLastNameHandler = this.changeLastNameHandler.bind(this); 
      this.changeContactNoHandler = this.changeContactNoHandler.bind(this);
      this.changeAddressHandler = this.changeAddressHandler.bind(this);  
      this.changeCgpaHandler = this.changeCgpaHandler.bind(this);
      this.changeYopHandler = this.changeYopHandler.bind(this);  
  }
  
   changeEmailHandler = (event) => {
       this.setState({
           email: event.target.value
       });
   }

   changeFirstNameHandler = (event) => {
    this.setState({
        firstName: event.target.value
    });
}

changePasswordHandler = (event) => {
    this.setState({
        password: event.target.value
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

  submitRegistrationOfStudent = (e) =>{
      e.preventDefault();
      let studentDetails = {
          role:this.state.role,
          email:this.state.email,
          password:this.state.password,
          firstName:this.state.firstName,
          lastName:this.state.lastName,
          contactNo:this.state.contactNo,
          yearOfPassing:this.state.yearOfPassing,
          cgpa:this.state.cgpa,
          address:this.state.address
      
    }
    console.log('studentDetails =>'+JSON.stringify(studentDetails));
    StudentService.registerStudent(studentDetails).then((res)=>{
        alert('Successfully registered')
        window.location='/student_Login';
   })
  }
  
    
    render() {
        return (
            <div>
                <div className="form-data">
                <h3 className="text-center">Register Form</h3>
              <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
  value={this.state.email} onChange={this.changeEmailHandler} />
  <label for="floatingInput">Email address</label>
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
  value={this.state.password} onChange={this.changePasswordHandler}/>
  <label for="floatingPassword">Password</label>
</div> 
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
  <button class="btn btn-success" type="button" style={{margin:"10px"}}
  onClick={this.submitRegistrationOfStudent} >Register</button>
</div>
</div>           
</div>
        )
    }


}

export default RegisterStudent;
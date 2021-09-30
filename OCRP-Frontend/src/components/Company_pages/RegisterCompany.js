import React, { Component } from 'react'
import CompanyService from '../../Services/CompanyService'

 class RegisterCompany extends Component {

  constructor(props) {
      super(props)
  
      this.state = {
          role:"company",
          name:" ",
          description:" ",
          email:" ",
          password:" ",
          contactNo:" ",
          address:" ",
          
      }
  
      this.changePasswordHandler = this.changePasswordHandler.bind(this)
      this.changeEmailHandler = this.changeEmailHandler.bind(this); 
      this.changeNameHandler = this.changeNameHandler.bind(this); 
      this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this); 
      this.changeContactNoHandler = this.changeContactNoHandler.bind(this);
      this.changeAddressHandler = this.changeAddressHandler.bind(this);  
      
  }
  
   changeEmailHandler = (event) => {
       this.setState({
           email: event.target.value
       });
   }

   changeNameHandler = (event) => {
    this.setState({
        name: event.target.value
    });
}

changePasswordHandler = (event) => {
    this.setState({
        password: event.target.value
    });
}
 
changeDescriptionHandler = (event) => {
    this.setState({
        description: event.target.value
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



  submitRegistrationOfCompany = (e) =>{
      e.preventDefault();
      let companyDetails = {
          role:this.state.role,
          email:this.state.email,
          password:this.state.password,
          name:this.state.name,
          description:this.state.description,
          contactNo:this.state.contactNo,
          address:this.state.address
      
    }
    console.log('companyDetails =>'+JSON.stringify(companyDetails));
    CompanyService.registerCompany(companyDetails).then((res)=>{
        alert('Successfully registered')
        window.location="/company_Login";
   })
  }
  
    
    render() {
        return (
            <div>
                <div className="form-data" >
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
  <input type="name" className="form-control" id="floatingInput" placeholder=" name" 
  value={this.state.name} onChange={this.changeNameHandler}/>
  <label for="floatingInput">Name</label>
</div>
<div className="form-floating mb-3">
  <input type="description" className="form-control" id="floatingInput" placeholder="description"
  value={this.state.description} onChange={this.changeDescriptionHandler}/>
  <label for="floatingPassword">Description</label>
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

<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-success" type="button" style={{margin:"10px"}} 
  onClick={this.submitRegistrationOfCompany} >Register</button>
</div>
</div>           
</div>
        )
    }


}

export default RegisterCompany;
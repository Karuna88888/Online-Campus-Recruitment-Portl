import React, { Component } from 'react'

import UserService from '../Services/UserService';

class AdminLogin extends Component {

   constructor(props) {
       super(props)
   
       this.state = {
           email:" ",
           password:" ",
           role:"admin",
           
       }
   
      this.changeadminEmailHandler = this.changeadminEmailHandler.bind(this);
      this.changeadminPasswordHandler = this.changeadminPasswordHandler.bind(this);
      this.submitLoginDetails = this.submitLoginDetails.bind(this);

   }

   changeadminEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  changeadminPasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
 
  submitLoginDetails = (e) => {
      e.preventDefault();
      let user={email:this.state.email, password:this.state.password,role:this.state.role};
       console.log('User =>'+JSON.stringify(user));
       UserService.authenticateUser(user).then((res) => {
            if(res.data.role==="admin"){
                window.location="/admin_Homepage"
            }else
            {
                alert('Invalid credentials. Please try again.')
                window.location="/admin_Login";
            }
       });
      
  }
   

    render() {
        return (
            <div>
                 <div className="form-data" >
                 <h3 className="text-center">Admin Login</h3>
                <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
  value={this.state.email} onChange={this.changeadminEmailHandler} />
  <label for="floatingInput">Email address</label>
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="adminPassword"
  value={this.state.password} onChange={this.changeadminPasswordHandler}/>
  <label for="floatingPassword">Password</label>
</div> 
<div class="d-grid gap-2 col-6 mx-auto">
  <input className="btn btn-primary me-md-2" style={{margin:"10px"}} type="submit" value="Login" onClick={this.submitLoginDetails}/>
</div>
       </div>
            </div>
        )
    }
}

export default AdminLogin;

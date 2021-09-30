import React, { Component } from 'react';
import {Link} from 'react-router-dom';
 class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="container"></div>


                 <div>
                

                <Link to="/student_Login" className="btn btn-success me-md-2" style={{margin:"10px"}}> Student Login </Link>
                
                <Link to="/register_Student" className="btn btn-primary me-md-2" style={{margin:"10px"}}> Register Student </Link>
                
                <Link to="/company_Login" className="btn btn-success me-md-2" style={{margin:"10px"}}> Company Login </Link>
                
                <Link to="/register_Company" className="btn btn-primary me-md-2" style={{margin:"10px"}}> Register Company </Link>
                
                <Link to="/admin_Login" className="btn btn-warning me-md-2" style={{margin:"10px"}}> Admin Login </Link>
               
              
               
                </div>

                <div className="form_data">

                </div>
                
                <Link to="/about_us" className="btn btn-info me-md-2" style={{margin: "1px"}}> About Us </Link>
       
        <Link to="/contact_us" className="btn btn-info me-md-2" style={{margin: "1px"}}> Contact Us </Link>
       

            </div>
        )
    }
}

export default HomePage;

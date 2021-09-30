import React, { Component } from "react";
import { Link } from "react-router-dom";

class AboutComponent extends Component {
  render() {
    return (
      <div className="container">
          
        <div className="greetingsProfileCard">
            <center className="greetingsProfileInfo">
            <h3 className="text-center">About Us</h3>
            </center>
          </div>
        <div className="card bg-info aboutUsCard">
          <div className="card-body  ">
            <p className="card-text justify ">
              <br />
              The Campus Recruitment System is for the students and companies which maintains 
              the database for the students where all the students records are entered including 
              their academic details and their personal details.It will also manage the data of 
              the Company which would comprise of the profile of the Company, eligibility criteria 
              and the facilities or the package it provides.The System would provide the facility
               of viewing both the personal and academic information of the student and company and 
               also deal with the insertion and deletion of records.
             <br/> 
             <h5>
                " ALL THE BEST "
              </h5>
            </p>
          </div>
        </div>
        <Link to="/homepage" className="btn btn-secondary me-md-2"  style={{margin: "2px"}}> Back </Link>
      </div>
    );
  }
}

export default  AboutComponent;
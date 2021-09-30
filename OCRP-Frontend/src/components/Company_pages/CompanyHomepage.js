import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CompanyService from '../../Services/CompanyService'

 class CompanyHomepage extends Component {
constructor(props) {
    super(props)

    this.state = {
        cId:this.props.match.params.sId,
        job:[],
        company:[]
    }

    this.postJob = this.postJob.bind(this);
    this.viewProfile = this.viewProfile.bind(this);
    this.updateCompany = this.updateCompany.bind(this);
}

postJob(){
    this.props.history.push(`/post_Job`);
}

viewProfile(){
    this.props.history.push(`/view_Company`);
}

updateCompany(cId){
    this.props.history.push(`/update_Company/${cId}`);
 }

    render() {
        return (
            <div>
                <div className="container">
                 <button className="btn btn-primary me-md-2" style={{margin:"10px"}} onClick={this.postJob}>Post Job</button>
               
                {/* <div className="row">
                 <button className="btn btn-info me-md-2" onClick={this.viewProfile}>View profile</button>
                </div> */}
              
            <button onClick={()=> this.updateCompany(this.state.company.cId)} className="btn btn-info" style={{margin: "10px"}}>Update profile</button> 
           
            <Link to="/homepage" className="btn btn-warning me-md-2" style={{margin:"10px"}}> Log out </Link>
          </div>
          <div>
              <img src="./images/company.jpg" height="360px"/>
          </div>
            </div>

        )
    }
}

export default CompanyHomepage;
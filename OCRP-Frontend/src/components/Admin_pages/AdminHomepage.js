import React, { Component } from 'react';
import {Link} from 'react-router-dom';
 class AdminHomepage extends Component {
    render() {
        return (
            
                <div className="container">
                    <div className="homepage">HOMEPAGE</div>
                <div>
                <Link to="/view_Students" className="btn btn-info me-md-2" style={{margin:"10px"}}>  View Students Details  </Link>
                </div>
                <div>
                <Link to="/view_Companies" className="btn btn-info me-md-2" style={{margin:"10px"}}> View Company Details </Link>
                </div>
                <div>
                <Link to="/view_Jobs" className="btn btn-info me-md-2" style={{margin:"10px"}}> View Job Details </Link>
                </div>
                <div>
                <Link to="/homepage" className="btn btn-danger me-md-2" style={{margin:"10px"}}> Logout </Link>
                </div>
                </div>
            
        )
    }
}

export default AdminHomepage;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminService from '../../Services/AdminService';

class ViewCompanyByAdmin extends Component {
constructor(props) {
    super(props)

    this.state = {
        company:[],
    }
 }
  
 componentDidMount() {
    AdminService.viewCompany().then((res) => {
      this.setState({ company: res.data });
    });

}

    deleteCompanyById(cId) {
        AdminService.deleteCompanyById(cId).then((res) => {
          this.setState({
            company: this.state.company.filter((company) => company.cId !== cId),
          });
          alert("Company deleted successfully..!!");
        })
    }
        render() {
            return (
                <div className="container">
                 
          <h3 className="text-center">All Company</h3>
                    <table className="table table-striped table-bordered table-secondary">
                    <thead>
                      <tr className="table-dark">
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact Number</th>
                        <th scope="col">Address</th>
                        <th scope="col">Delete Company</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.company
                        .map((company) => (
                          <tr>
                            <td>{company.cId}</td>
                            <td>{company.name}</td>
                            <td>{company.description}</td>
                            <td>{company.email}</td>
                            <td>{company.contactNo}</td>
                            <td>{company.address}</td>
                            <td>
                            <button
                              onClick={() => this.deleteCompanyById(company.cId)}
                              className="btn btn-danger" style={{margin:"10px"}}
                            >DELETE</button>
                            </td>
                          </tr>
                        ))}
        
                       </tbody>       
                    </table>
                    <div>
            <Link to="/admin_Homepage" className="btn btn-secondary me-md-2" style={{margin:"2px"}}> Back </Link>
          </div>
          <div>
            <Link to="/student_Login" className="btn btn-warning me-md-2" style={{margin:"2px"}}> Log out </Link>
          </div>
                </div>
            )
        }

    
}

export default ViewCompanyByAdmin;
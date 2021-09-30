import React,{Component} from "react";
import { Link } from "react-router-dom";
import CompanyService from "../../Services/CompanyService";

class ViewCompany extends Component {
     
    constructor(props){
         super(props);

         this.state = {
               company:[],
               cId: this.props.match.params.cId,

         }
        
         this.deleteCompanyById = this.deleteCompanyById.bind(this);
         this.getCompanyById = this.getCompanyById.bind(this);

    }

    getCompanyById(cId) {
        CompanyService.getCompanyById(cId).then((res) => {
          this.setState({ company: this.state.company.filter((company) => company.cId !== cId)
           });
        });
    
    }

    deleteCompanyById(cId) {
        CompanyService.deleteCompanyById(cId).then((res) => {
          this.setState({
            company: this.state.company.filter((company) => company.cId !== cId),
          });
        })
    }

    // updateCompanyById(cId,company) {
    //     CompanyService.updateCompanyById(cId,company).then((res) => {
    //       this.setState({
    //         company: this.state.company.filter((company) => company.cId !== cId),
    //       });
    //     })
  //     }

    render() {
        return (
            <div className="container">
              <div>
            <Link to="/student_Homepage" className="btn btn-info me-md-2"> Back </Link>
          </div>
          <div>
            <Link to="/student_Login" className="btn btn-warning me-md-2"> Log out </Link>
          </div>
                <div className="allcompany">ALL COMPANIES</div>
                <table className="table-secondary">
                <thead>
                  <tr className="table-dark">
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact Number</th>
                    <th scope="col">Address</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
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
                        {/* <td>
                        <button
                          onClick={() => this.updateCompanyById(company.cId)}
                          className="btn btn-warning"
                        >UPDATE</button>
                        </td> */}
                        <td>
                        <button
                          onClick={() => this.deleteCompanyById(company.cId)}
                          className="btn btn-danger"
                        >DELETE</button>
                        </td>
                      </tr>
                    ))}
    
                   </tbody>       
                </table>
            </div>
        )
    }

}

export default ViewCompany;
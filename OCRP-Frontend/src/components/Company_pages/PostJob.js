import React, { Component } from 'react'
import CompanyService from '../../Services/CompanyService';

class PostJob extends Component {

    constructor(props) {
        super(props)
      //  const cId = sessionStorage.getItem("cId") ;
        this.state = {
            cId:this.props.match.params.cId,
            name:" ",
            description:" ",
            salary:" ",
            elg_Cgpa:" ",
            elg_Yop:" "
        }
    
        this.changeJobnameHandler = this.changeJobnameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
        this.changeCgpaHandler = this.changeCgpaHandler.bind(this);
        this.changeYopHandler = this.changeYopHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.PostJob = this.PostJob.bind(this);
    }


    PostJob = (e) =>{
        alert("Job posted successfully");
      e.preventDefault(); 
      let job = {
          name:this.state.name,
          description:this.state.description,
          salary:this.state.salary,
          elg_Cgpa:this.state.elg_Cgpa,
          elg_Yop:this.state.elg_Yop
      };
      console.log("job => "+JSON.stringify(job));

      CompanyService.postJob(this.state.cId,job).then(res => {
          this.props.history.push(`/company_Homepage`);
      })

    }


    changeJobnameHandler = (e) => {
        this.setState({
            name: e.target.name
           });
    }
    changeDescriptionHandler = (e) => {
        this.setState({
            description: e.target.description
           });
    }
   
    changeCgpaHandler = (e) => {
        this.setState({
            elg_Cgpa: e.target.elg_Cgpa
           });
    }
   
    changeSalaryHandler = (e) => {
        this.setState({
            salary: e.target.salary
           });
    }
   
    changeYopHandler = (e) => {
        this.setState({
            elg_Yop: e.target.elg_Yop
           });
    }
   
    cancel(){
        this.props.history.push(`/company_Homepage`);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Post Job</h3> 
                        <div className="card-body">
                        <form>
                       <div className="form-group">
                           <label>Job Title</label>
                           <input placeholder="title" name="dba" className="form-control"
                            value={this.state.name} onChange={this.changeJobnameHandler}/>
                       </div>
                       <div className="form-group">
                           <label>Description</label>
                           <input placeholder="description" name="description" className="form-control"
                            value={this.state.description} onChange={this.changeDescriptionHandler}/>
                       </div>
                       <div className="form-group">
                           <label>Package</label>
                           <input placeholder="salary in lpa" name="salary" className="form-control"
                            value={this.state.salary} onChange={this.changeSalaryHandler}/>
                       </div>
                       <div className="form-group">
                           <label>Required CGPA</label>
                           <input placeholder="cgpa" name="cgpa" className="form-control"
                            value={this.state.elg_Cgpa} onChange={this.changeCgpaHandler}/>
                       </div>
                       <div className="form-group">
                           <label>Required year of passing</label>
                           <input placeholder="year of passing" name="elg_" className="form-control"
                            value={this.state.elg_Yop} onChange={this.changeYopHandler}/>
                       </div>
                        <div>
                        <button className="btn btn-success" onClick={this.PostJob} style={{margin:"10px"}}>Post</button>
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>

                        </div>
                        </form>

                        </div>
                        
                        </div>

                    </div>


                </div>
               

            </div>
        )
    }
}
export default PostJob;
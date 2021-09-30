import React, { Component } from 'react'
import CompanyService from '../../Services/CompanyService'; 

 class UpdateCompany extends Component {

  constructor(props) {
      super(props)
     // const cId=sessionStorage.getItem("cId") ;
      this.state = {
         
          cId:this.props.match.params.sId,
          name:" ",
          description:" ",
          contactNo:" ",
          address:" ",
          
         
      }
  
      this.changeNameHandler = this.changeNameHandler.bind(this); 
      this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this); 
      this.changeContactNoHandler = this.changeContactNoHandler.bind(this);
      this.changeAddressHandler = this.changeAddressHandler.bind(this); 
  }
  
   

  changeNameHandler = (event) => {
    this.setState({
        name: event.target.value
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

changeDescriptionHandler = (event) => {
    this.setState({
        description: event.target.value
    });
}

      componentDidMount(){
          CompanyService.getCompanyById(this.state.cId).then((res) =>{  
      let companyDetails = res.data;
           this.setState({
                
                name:companyDetails.name,
                contactNo:companyDetails.contactNo,
                address:companyDetails.address,
                description:companyDetails.description
           })
          
          
          });
      
    }
    UpdateCompany = (e)=>{
        alert("Company details updated..!!");
        e.preventDefault();
        let companyDetails = {
            name: this.state.name,
            contactNo : this.state.contactNo,
            address : this.state.address,
            description : this.state.description
           
         }
        console.log('companyDetails =>'+JSON.stringify(companyDetails));
         CompanyService.updateCompanyById(this.state.cId,companyDetails).then((res)=>{
        alert('Successfully updated')
        window.location="/company_Login";
   })
    
    
  }
  cancel(){
    this.props.history.push('/company_Homepage');
}
  
  
    
    render() {
        return (
            <div>
                <div className="form-data" >
                <h2 className="text-center">Update Profile</h2>
             
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
  onClick={this.UpdateCompany} >Update</button>
  <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
</div>
</div>           
</div>
        )
    }


}

export default UpdateCompany;
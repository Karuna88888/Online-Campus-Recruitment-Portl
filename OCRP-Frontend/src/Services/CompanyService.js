import React,{Component} from "react";
import axios from "axios";

const CRS_URL = "http://localhost:9090/CRS_Backend/company";

class CompanyService extends Component {

  registerCompany(newCompany) {
    return axios.post(CRS_URL, newCompany);
  }

  getCompanyById(cId) {
      return axios.get(CRS_URL + "/" + cId);
  }

  updateCompanyById(cId,companyDetails) {
    return axios.put(CRS_URL + "/" + cId, companyDetails);
  }

  
  // getAllCompany() {
  //   return axios.get(CRS_URL);
  // }

  deleteCompanyById(cId) {
    return axios.delete(CRS_URL + "/" + cId);
  }

  postJob(cId,jobDetails) {
      return axios.post(CRS_URL + "/postjob" + cId, jobDetails);
  }

  updateJob(jId,jobDetails) {
    return axios.post(CRS_URL + "/updatejob" + jId, jobDetails);
}

  deleteJob(jId) {
    return axios.post(CRS_URL + "/deletejob" + jId);
}

}

export default new CompanyService();
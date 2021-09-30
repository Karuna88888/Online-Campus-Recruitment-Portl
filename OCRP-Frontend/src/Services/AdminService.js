import React,{Component} from "react";
import axios from "axios";

const CRS_URL = "http://localhost:9090/CRS_Backend/admin";

class AdminService extends Component {

  registerAdmin(newAdmin) {
    return axios.post(CRS_URL, newAdmin);
  }

//   UpdateAdmin(adminId,adminDetails) {
//     return axios.put(CRS_URL + "/" + adminId, adminDetails);
//   }

  viewJob() {
      return axios.get(CRS_URL + "/jobs");
  }

  viewCompany() {
    return axios.get(CRS_URL + "/company");
  }

  viewStudent() {
    return axios.get(CRS_URL + "/students");
  }

  deleteStudentById(sId) {
    return axios.delete(CRS_URL + "/students" + "/" + sId);
  }

  deleteJobById(jId) {
     return axios.delete(CRS_URL + "/jobs" + "/" + jId);
       }

     deleteCompanyById(cId) {
    return axios.delete(CRS_URL + "/company" + "/" + cId);
  }
}

export default new AdminService();
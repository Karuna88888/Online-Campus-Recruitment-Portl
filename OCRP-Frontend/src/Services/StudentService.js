import React,{Component} from "react";
import axios from "axios";

const CRS_URL = "http://localhost:9090/CRS_Backend/students";

class StudentService extends Component {

  registerStudent(newStudent) {
    return axios.post(CRS_URL, newStudent);
  }

  getStudentById(sId) {
      return axios.get(CRS_URL + "/" + sId);
  }

  updateStudentById(sId,studentDetails) {
    return axios.put(CRS_URL + "/" + sId, studentDetails);
  }

  
  getAllStudent() {
    return axios.get(CRS_URL);
  }

  deleteStudentById(sId) {
    return axios.delete(CRS_URL + "/" + sId);
  }

  applyJob(sId) {
      return axios.post(CRS_URL + "/" + sId);
  }

}

export default new StudentService();
import React,{Component} from "react";
import axios from "axios";

const CRS_URL = "http://localhost:9090/CRS_Backend/jobs";

class JobService extends Component {


    getAllJob() {
        return axios.get(CRS_URL);
      }

      getJobById(jId) {
        return axios.get(CRS_URL + "/" + jId);
    }
}

export default new JobService();
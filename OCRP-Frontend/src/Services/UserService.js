import axios from "axios";

const CRS_URL = "http://localhost:9090/CRS_Backend/user";

class UserService {
    authenticateUser(authUser) {
      return axios.post(CRS_URL, authUser);
    }
  }
  
  export default new UserService();
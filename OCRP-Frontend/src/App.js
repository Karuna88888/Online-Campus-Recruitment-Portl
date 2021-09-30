
import './App.css';
import { BrowserRouter, Link, Route, Switch , Redirect } from 'react-router-dom';
import ViewJobByAdmin from './components/Admin_pages/ViewJobByAdmin';
import ViewStudentByAdmin from './components/Admin_pages/ViewStudentByAdmin';
import ViewCompanyByAdmin from './components/Admin_pages/ViewCompanyByAdmin';
import ViewCompany from './components/Company_pages/ViewCompany';
import RegisterStudent from './components/Student_pages/RegisterStudent';
import StudentService from './Services/StudentService';
import AdminService from './Services/AdminService';
import StudentLogin from './components/StudentLogin';
import UpdateStudent from './components/Student_pages/UpdateStudent';
import RegisterCompany from './components/Company_pages/RegisterCompany';
import UpdateCompany from './components/Company_pages/UpdateCompany';
import HomePage from './components/HomePage';
import StudentHomepage from './components/Student_pages/StudentHomepage';
import AdminLogin from './components/AdminLogin';
import CompanyLogin from './components/CompanyLogin';
import AdminHomepage from './components/Admin_pages/AdminHomepage';
import ViewJob from './components/Student_pages/ViewJob';
import ViewStudent from './components/Student_pages/ViewStudent';
import Header from './components/Header';
import Footer from './components/Footer';
import CompanyHomepage from './components/Company_pages/CompanyHomepage';
import PostJob from './components/Company_pages/PostJob';
import AboutComponent from './components/AboutComponent';
import ContactUs from './components/ContactUs';



function App() {
  return (
    <div>
      
       <BrowserRouter>
       < Header />
          
          <div className="container">  
              <Switch>
                  
                  <Route path="/view_Companies" exact component={ViewCompanyByAdmin} />
                  <Route path="/view_Students" exact component={ViewStudentByAdmin} />
                  <Route path="/view_Jobs" exact component={ViewJobByAdmin} />
                  <Route path="/company_Id" exact component={ViewCompany} />
                  <Route path="/register_Student" exact component={RegisterStudent} />
                  <Route path="/view_job_apply" exact component={AdminService,StudentService} />
                  <Route path="/student_Login" exact component={StudentLogin} />
                  <Route path="/company_Login" exact component={CompanyLogin} />
                  <Route path="/admin_Login" exact component={AdminLogin} />
                  <Route path="/update_Student/:sId" exact component={UpdateStudent} />
                  <Route path="/register_Company" exact component={RegisterCompany} />
                  <Route path="/update_Company/:cId" exact component={UpdateCompany} /> 
                  <Route path="/homepage" exact component={HomePage} /> 
                  <Route path="/student_Homepage" exact component={StudentHomepage} />
                  <Route path="/company_Homepage" exact component={CompanyHomepage} />
                  <Route path="/admin_Homepage" exact component={AdminHomepage} />
                  <Route path="/viewjob_student" exact component={ViewJob} /> 
                  <Route path="/view_profile/:sId" exact component={ViewStudent} />
                  <Route path="/view_profile" exact component={ViewCompany} /> 
                  <Route path="/post_Job" exact component={PostJob} />
                  <Route path="/about_us" exact component={AboutComponent} />
                  <Route path="/contact_us" exact component={ContactUs} />
                  

                 


               </Switch>
                </div>
                     
           
    </BrowserRouter>
    
    </div>
  );
}

export default App;

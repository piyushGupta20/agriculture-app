import React from "react";
import Navbar from "../components/navbar";
import './Login.css'
function Login() {
  return (
    <>
    <Navbar/>
    <div className="vh-100">
        <div className="containerh-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="http://static.allservicepoint.com/upload/Add/5cc7eac65df33.png"
                className="img-fluid" height="300px" width="300px" alt="Sample image"/>
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 container1">
              <form>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" for="form3Example3">Email address</label>
                  <input type="email" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Enter a valid email address" />
                </div>
      
                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                  <label className="form-label" for="form3Example4">Password</label>
                  <input type="password" id="form3Example4" className="form-control form-control-lg"
                  placeholder="Enter password" />
                </div>
      
                <div className="d-flex justify-content-between align-items-center">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" for="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">Forgot password?</a>
                </div>
      
                <div className="text-center text-lg-start mt-4 pt-2">
                  <a href="Seller_service.html">
                    <button type="button" className="btn btn-primary btn-lg namecss">Login</button>
      
                  </a>
                  <a href="">
                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="Register.html"
                      className="link-danger">Register</a></p>
                  </a>
                </div>
      
              </form>
            </div>
          </div>
        </div>
        {/* <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2023. All rights reserved.
          </div>
          
      
          
          <div>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="#!" className="text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          
        </div> */}
      </div>
</>

  );
}

export default Login;

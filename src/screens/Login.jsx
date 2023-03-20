import React from "react";
// import './Login.css'
function Login() {
  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="http://static.allservicepoint.com/upload/Add/5cc7eac65df33.png"
                className="img-fluid"
                height="400px"
                width="400px"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 container1">
              <form>
                <div className="form-outline mb-4">
                  <label className="form-label" for="form3Example3">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label" for="form3Example4">
                    Password
                  </label>
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" for="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a className="text-body">Forgot password?</a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="button" className="btn btn-primary btn-lg">
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <a className="link-danger">Register</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          <div className="text-white mb-3 mb-md-0">
            Copyright Â© 2023. All rights reserved.
          </div>

          <div>
            <a className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a className="text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div> */}
        <footer class="bg-primary text-center text-lg-start">
          <div class="container p-4">
            <div class="row">
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Links</h5>

                <ul class="list-unstyled mb-0">
                  {/* <li>
                    <a href="#!" class="text-dark">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Link 4
                    </a>
                  </li>*/}
                </ul> 
              </div>

              {/* <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-0">Links</h5>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!" class="text-dark">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div> */}

              {/* <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Links</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-dark">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div> */}

              {/* <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-0">Links</h5>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!" class="text-dark">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          {/* </div> */}

          <div
            class="text-center p-3"
            // style="background-color: rgba(0, 0, 0, 0.2);"
          >
            © 2020 Copyright:
            <a class="text-dark" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Login;

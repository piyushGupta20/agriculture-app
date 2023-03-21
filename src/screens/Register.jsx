import React from 'react'
import Navbar from '../components/navbar'

function Register() {
  return (
    <div>
        <Navbar/>
        <section className="h-100 bg-dark">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div
              className="col-xl-6 d-none d-xl-block"
              style={{ paddingLeft: 10, marginTop: 50 }}
            >
              <img
                src="http://static.allservicepoint.com/upload/Add/5cc7eac65df33.png"
                height="500px"
                width="500px"
                alt="Sample photo"
                className="img-fluid"
                style={{
                  borderTopLeftRadius: ".25rem",
                  borderBottomLeftRadius: ".25rem"
                }}
              />
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">
                  कृषि मित्र registration form
                </h3>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example1m"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example1m">
                        First name
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example1n"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example1n">
                        Last name
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example1m1"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example1m1">
                        Mother's name
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example1n1"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example1n1">
                        Father's name
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example8"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example8">
                    Address
                  </label>
                </div>
                <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                  <h6 className="mb-0 me-4">Gender: </h6>
                  <div className="form-check form-check-inline mb-0 me-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="femaleGender"
                      defaultValue="option1"
                    />
                    <label className="form-check-label" htmlFor="femaleGender">
                      Female
                    </label>
                  </div>
                  <div className="form-check form-check-inline mb-0 me-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="maleGender"
                      defaultValue="option2"
                    />
                    <label className="form-check-label" htmlFor="maleGender">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline mb-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="otherGender"
                      defaultValue="option3"
                    />
                    <label className="form-check-label" htmlFor="otherGender">
                      Other
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <select className="select">
                      <option value={1}>State</option>
                      <option value={2}>Option 1</option>
                      <option value={3}>Option 2</option>
                      <option value={4}>Option 3</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-4">
                    <select className="select">
                      <option value={1}>City</option>
                      <option value={2}>Option 1</option>
                      <option value={3}>Option 2</option>
                      <option value={4}>Option 3</option>
                    </select>
                  </div>
                  <div className="col-md-5 mb-4">
                    <select className="select">
                      <option value={1}>Register as</option>
                      <option value={2}>Farmer</option>
                      <option value={3}>Seller</option>
                      <option value={4}>Non-Resident Farmer</option>
                      <option value={5}>Official government employee</option>
                    </select>
                  </div>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example9"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example9">
                    DOB
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example90"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example90">
                    Pincode
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example99"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example99">
                    Aadhar Card No.
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example97"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example97">
                    Email ID
                  </label>
                </div>
                <div className="d-flex justify-content-end pt-3">
                  <button type="button" className="btn btn-light btn-lg">
                    Reset all
                  </button>
                  <button type="button" className="btn btn-warning btn-lg ms-2">
                    Submit form
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Register
import React from 'react'
import Navbar from '../components/navbar'
import './farmers.css'
function Farmers() {
  return (
    <div>
        <Navbar/>
        <div className="container">
  <form>
    {/* 2 column grid layout with text inputs for the first and last names */}
    <div className="row mb-4">
      <div className="col">
        <div className="form-outline">
          <label className="form-label" htmlFor="form6Example1">
            First name(Farmer's)
          </label>
          <input type="text" id="form6Example1" className="form-control" />
        </div>
      </div>
      <div className="col">
        <div className="form-outline">
          <label className="form-label" htmlFor="form6Example2">
            Last name
          </label>
          <input type="text" id="form6Example2" className="form-control" />
        </div>
      </div>
    </div>
    {/* Text input */}
    <div className="form-outline mb-4">
      <label className="form-label" htmlFor="form6Example3">
        Crop Name
      </label>
      <input type="text" id="form6Example3" className="form-control" />
    </div>
    <div className="form-outline mb-4">
      <label className="form-label" htmlFor="form6Example6">
        Quantity(in kg)
      </label>
      <input type="number" id="form6Example6" className="form-control" />
    </div>
    {/* Text input */}
    <div className="form-outline mb-4">
      <label className="form-label" htmlFor="form6Example6">
        Price(in Rs)
      </label>
      <input type="number" id="form6Example6" className="form-control" />
    </div>
    <div className="form-outline mb-4">
      <label className="form-label" htmlFor="form6Example4">
        Address
      </label>
      <input type="text" id="form6Example4" className="form-control" />
    </div>
    {/* Number input */}
    <div className="form-outline mb-4">
      <label className="form-label" htmlFor="form6Example6">
        Phone
      </label>
      <input type="number" id="form6Example6" className="form-control" />
    </div>
    {/* Message input */}
    <div className="form-outline mb-4">
      <label className="form-label" htmlFor="form6Example7">
        Additional information
      </label>
      <textarea
        className="form-control"
        id="form6Example7"
        rows={4}
        defaultValue={""}
      />
    </div>
    {/* Submit button */}
    <button type="submit" className="btn btn-primary btn-block mb-4">
      Submit
    </button>
  </form>
</div>

    </div>
  )
}

export default Farmers
import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../components/Card'
import Navbar from '../components/navbar';
import './Home.css'
function Home() {
    const cardItem = [
        {no:1,name:"x"},
        {no:2,name:"y"},
        {no:3,name:"y"},
        {no:4,name:"y"},
        {no:5,name:"y"},
        {no:6,name:"y"},
        {no:7,name:"y"},
        {no:8,name:"y"},
        
        
    ];
  return (
      <>
      {/* <Navbar/> */}
  {/* <div className="context">
    <div className="context1">
      <img
        src="http://static.allservicepoint.com/upload/Add/5cc7eac65df33.png"
        alt=""
        height="300px"
        weight="300px"
      />
    </div>
    <div className="context2">
      <div className="context3">
        <p>कृषि मित्र</p>
      </div>
      <div className="context4">
        <p>For the farmers and sellers</p>
      </div>
    </div>
  </div> */}
  <div className="container1">
    <div className="container3">
    
      <div className="container2">
        <img
          src="https://previews.123rf.com/images/rrraven/rrraven1604/rrraven160400084/55851715-vector-black-farmer-icon-on-white-background.jpg"
          alt=""
          height="150px"
          width="200px"
          style={{
            aspectRatio: "3/2",
            objectFit: "contain",
            mixBlendMode: "color-burn",
            marginLeft: 20,
            marginTop: 40,
            marginBottom: 10
          }}
        />
        <hr />
        <div className="text">
        <Link to="/farmers">FARMERS</Link>
        </div>
      </div>
      <div className="container2">
        <img
          src="https://thumbs.dreamstime.com/b/farmer-market-thin-line-icon-seller-vector-illustration-isolated-white-store-outline-style-design-designed-web-farmer-138064142.jpg"
          alt=""
          height="150px"
          width="150px"
          style={{
            aspectRatio: "3/2",
            objectFit: "contain",
            mixBlendMode: "color-burn",
            marginLeft: 20,
            marginTop: 30,
            marginBottom: 20
          }}
        />
        <hr />
        <div className="text">
        <Link to="/sell">TO SELL</Link>
        </div>
      </div>
      <div className="container2">
        <img
          src="https://fcpablog.com/wp-content/uploads/2016/05/Screen20Shot202016-05-1720at201.05.4120PM.png"
          alt=""
          height="150px"
          width="150px"
          style={{
            aspectRatio: "3/2",
            objectFit: "contain",
            mixBlendMode: "color-burn",
            marginLeft: 20,
            marginTop: 20,
            marginBottom: 5
          }}
        />
        <hr />
        <div className="text">
          <p>Government Officials</p>
        </div>
      </div>
      <div className="container2">
        <img
          src="https://thumbs.dreamstime.com/b/icon-buyer-purchaser-buyer-209452390.jpg"
          alt=""
          height="150px"
          width="150px"
          style={{
            aspectRatio: "3/2",
            objectFit: "contain",
            mixBlendMode: "color-burn",
            marginLeft: 20,
            marginTop: 20,
            marginBottom: 20
          }}
        />
        <hr />
        <div className="text">
          <p>To Buy</p>
        </div>
      </div>
      <div className="container2">
        <img
          src="https://previews.123rf.com/images/rrraven/rrraven1604/rrraven160400084/55851715-vector-black-farmer-icon-on-white-background.jpg"
          alt=""
          height="150px"
          width="200px"
          style={{
            aspectRatio: "3/2",
            objectFit: "contain",
            mixBlendMode: "color-burn",
            marginLeft: 20,
            marginTop: 25,
            // marginBottom: 10
          }}
        />
        <hr />
        <div className="text">
          <p>non-resident farmer</p>
        </div>
      </div>
    </div>
    {/* <div className="bottom">
      <div className="bottom2">
        <p>Copyright © 2023. All rights reserved.</p>
      </div>
    </div> */}
    <div>
    <footer
  className="text-center text-white"
  style={{ backgroundColor: "#faebd7" , marginTop:"179px"}}
>
  {/* Grid container */}
  <div className="container pt-4">
    {/* Section: Social media */}
    <section className="mb-4">
      {/* Facebook */}
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
      >
        <i className="fa fa-phone" />
        {/* <i className="fab fa-facebook-f" /> */}
      </a>
      {/* Twitter */}
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
      >
        <i className="fab fa-twitter" />
      </a>
      {/* Google */}
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
      >
        <i className="fab fa-google" />
      </a>
      {/* Instagram */}
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
      >
        <i className="fab fa-instagram" />
      </a>
      {/* Linkedin */}
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
      >
        <i className="fab fa-linkedin" />
      </a>
      {/* Github */}
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
      >
        <i className="fab fa-github" />
      </a>
    </section>
    {/* Section: Social media */}
  </div>
  {/* Grid container */}
  {/* Copyright */}
  <div
    className="text-center text-dark p-3"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
  >
    © 2020 Copyright:
    <a className="text-dark" href="https://mdbootstrap.com/">
      MDBootstrap.com
    </a>
  </div>
  {/* Copyright */}
</footer>

    </div>
  </div>
</>

  )
}

export default Home
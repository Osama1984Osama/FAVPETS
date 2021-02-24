import React from 'react'
import './about.css'
function About() {
  return (
    <div className = "main-info">

      <div className="info">
        <div>
          <img className='avatar' src='/img/ZAHER.jpg' />
          <h1>ZAHER</h1>
          <p className="info-text">
          a motivated graduated programmer looking for the best future with impriving his career
          </p>
          <hr></hr>
          <p className="icons">  For more Informations :</p>
          <i className="fab fa-facebook-square span-icon">
            {" "}
            <span>
              {" "}
              <a href="#">Facebook</a>{" "}
            </span>
          </i>
          <i className="fab fa-twitter-square span-icon">
            {" "}
            <span>
              {" "}
              <a href="#"> Twitter</a>
            </span>
          </i>
          <i className="fas fa-phone-volume span-icon">
            <span>
              {" "}
              <a href="#">Telephone</a>
            </span>
          </i>
        </div>
        <div>
          <img className='avatar' src='/img/Osama.jpg' />
          <h1>OSAMA</h1>
          <p className="info-text">
          a motivated graduated programmer looking for the best future with impriving his career
          </p>
          <hr></hr>
          <p className="icons">  For more Informations  :</p>
          <i className="fab fa-facebook-square span-icon">
            {" "}
            <span>
              {" "}
              <a href="#">Facebook</a>{" "}
            </span>
          </i>
          <i className="fab fa-twitter-square span-icon">
            {" "}
            <span>
              {" "}
              <a href="#"> Twitter</a>
            </span>
          </i>
          <i className="fas fa-phone-volume span-icon">
            <span>
              {" "}
              <a href="#">Telephone</a>
            </span>
          </i>
        </div>
        <div>
          <img className='avatar' src='/img/Mahmoud.jpeg' />
          <h1>MAHMOUD</h1>
          <p className="info-text">
         a  motivated graduated programmer looking for the best future with impriving his career
          </p>
          <hr></hr>
          <p className="icons">  For more Informations :</p>
          <i className="fab fa-facebook-square span-icon">
            {" "}
            <span>
              {" "}
              <a href="#">Facebook</a>{" "}
            </span>
          </i>
          <i className="fab fa-twitter-square span-icon">
            {" "}
            <span>
              {" "}
              <a href="#"> Twitter</a>
            </span>
          </i>
          <i className="fas fa-phone-volume span-icon">
            <span>
              {" "}
              <a href="#">Telephone</a>
            </span>
          </i>
        </div>
      </div>
      <footer className="footer-home"> &copy;  All right reserved <br></br> Set by Osama, Mahmoud & Zaher &reg; </footer >

    </div>
  )
}

export default About

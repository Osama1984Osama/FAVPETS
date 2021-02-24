import React, { useContext, useEffect } from "react";
import AuthContext from '../../context/auth/authContext'

import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user, loadUser, logout } = authContext;
  useEffect(() => {
    loadUser()

  }, [])
  const authLinks = (
    <>

      <li className="nav-item">
        <a href="#" onClick={() => { logout() }}>
          {" "}
          <img src="https://img.icons8.com/nolan/40/exit.png" /> Logout
                </a>
      </li>
      <li className='sub-li'> Hello {user && user.name} </li>
    </>
  );
  const visitorLinks = (
    <>
      <li className="nav-item ">
        <Link to="/register">
          <img src="https://img.icons8.com/nolan/45/edit-user-male.png" /> Register
                </Link>
      </li>
      <li className="nav-item">
        <Link to="/login">
          {" "}
          <img src="https://img.icons8.com/nolan/40/enter-2.png" /> Login
                </Link>
      </li>
    </>
  )
  return (
    <>
      <div class="grid-container">
        <header class="row">
          {isAuthenticated ?
            <div className="dropdown">
              <button className="dropbtn"><img src="https://img.icons8.com/nolan/100/menu-squared-2.png" /><img src="https://img.icons8.com/nolan/20/chevron-down.png" /></button>
              <div className="dropdown-content">
                <hr></hr>
                <li>
                  <Link to="/addContent">
                    <img src="https://img.icons8.com/nolan/33/add-to-collection.png" /> Add Content
                </Link>
                </li>
                <hr></hr>
                <li>
                  <Link to="/myContent">
                    <img src="https://img.icons8.com/nolan/40/my-topic.png" /> My Content
                </Link>
                </li>
                <hr></hr>

                <li>
                  <Link to="/userprofile">
                    <img src="https://img.icons8.com/nolan/40/user.png" /> My Profile
                </Link>
                </li>
                <hr></hr>
                <li>
                  <Link to="/message">
                    {" "}
                    <img src="https://img.icons8.com/nolan/40/communication.png" /> Messages
                </Link>
                </li>
                <hr></hr>
                <li>
                  <Link to="/favorite">
                    <img src="https://img.icons8.com/nolan/40/facebook-like.png" /> Favorite
                </Link>
                </li>
                <hr></hr>
              </div>
            </div>
            : ''}

          <div className="logo-info">
            <a className="brand" href="/">
              <img src="https://img.icons8.com/nolan/90/cat-footprint.png" /><span>FavPets</span>
            </a>
          </div>

          <div className="ulContainer">
            <ul id="ul">
              <div className='nav-item'>
              <li>
                
                <Link to="/">
                  {" "}
                  <img src="https://img.icons8.com/nolan/40/home-office.png" /> Home
              </Link>
              

            </li>
              </div>
              

              <li className="nav-item ">
                <Link>
                  <img src="https://img.icons8.com/nolan/40/video-gallery.png" /> Gallery <img src="https://img.icons8.com/nolan/20/chevron-down.png" />
                  <div className="dropdown-gallery">
                    <div className="dropdown-content-gallery">
                      <hr></hr>
                      <li>
                        <Link to="/cats"> <img src="https://img.icons8.com/nolan/40/cat.png" /> Cats</Link>
                      </li>
                      <hr></hr>
                      <li>
                        <Link to="/dogs"><img src="https://img.icons8.com/nolan/40/dog.png" /> Dogs</Link>
                      </li>
                      <hr></hr>
                      <li>
                        <Link to="/birds"> <img src="https://img.icons8.com/nolan/40/bird.png" /> Birds</Link>
                      </li>
                      <hr></hr>
                      <li>
                        <Link to="/horses"> <img src="https://img.icons8.com/nolan/40/rocking-horse.png" /> Horses</Link>
                      </li>
                      <hr></hr>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about">
                  {" "}
                  <img src="https://img.icons8.com/nolan/40/about.png" /> About us
                </Link>
              </li>
              {isAuthenticated ? authLinks : visitorLinks}
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;

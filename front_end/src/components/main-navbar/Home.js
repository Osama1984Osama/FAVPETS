import React from "react";
import "./Home.css";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import { useEffect, useState, useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import axios from "axios";
function Home() {
  const alertContext = useContext(AlertContext);
  const { addAlert } = alertContext;
  const [product, setProduct] = useState([]);
  const getData = async () => {
    // e.preventDefault();
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      };
      const response = await axios.get(
        "http://localhost:5000/product/all",
        config
      );
      console.log("data from server : ", response);
      if (response.data) {
        setProduct(response.data.products);
      }
    } catch (error) {
      addAlert(error.response.data.msg);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  
  return (
    <>
      <div className= 'all'>
        <Search />
        <h4 id= 'title'>Get Your Favorite Pet by <br></br><span> FavPets</span></h4>
        <div className="main">
          
          <div className="health">
            
            
              <Link className = 'link' to="/health"><button></button></Link>
            
            
          </div>
          <div className="praxis">
            {/* <h2>Here you can get Infos about praxis.</h2> */}
            
              <Link to="/praxis"><button></button></Link>
            
          </div>
          <div className="food">
            {/* <h2>Here you can get Infos about animals Food</h2> */}
            
              <Link to="/food"><button></button></Link>
            
          </div>
        </div>
      </div>
      
      <div className=" main-home">
      

        {product &&
          product.map((item) => {
            const detailsLink = `/details/${item._id}`;
            return (
              <>
                <Link to={detailsLink}>
                  <div className="card-item">
                    <p className='img-para'>
                      {item.photo ? (
                        <img style={{ height: '350px', }} src={`/uploads/${item.photo}`}
                        />
                      ) : (
                          "no photo "
                        )}
                    </p>
                    
                    <h3> Name: {item.name}</h3>
                    <hr></hr>
                    <h3>Price: {item.price}</h3>
                    <hr></hr>
                    <h3> Description: {item.description}</h3>
                    <div className="image-item"></div>
                    <hr></hr>
                    <h3>Location: {item.location}</h3>
                    <hr></hr>
                    
                  </div>
                </Link>
                
              </>
            );
          })}

      </div>
       <footer className="footer-home"> &copy;  All right reserved <br></br> Set by Osama, Mahmoud & Zaher &reg; </footer >
      
      
    </>
  );
}
export default Home;

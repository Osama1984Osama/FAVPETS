import React from "react";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import AlertContext from "../../../context/alert/alertContext";
import axios from "axios";
// import './details.css'
import "../../sidebar/myContent.css"
 
 
 
function Details() {
  const alertContext = useContext(AlertContext);
  const { addAlert } = alertContext;
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const getDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/product/details/${id}`
      );
      console.log("data from server : ", response);
      if (response.data) {
        setDetails(response.data.product);
      }
    } catch (error) {
      //addAlert(error.response.data.msg);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <div className= ' details-content'>
      <div className='cont '>
        
      
      {details !== undefined ? (
        <>
        <p><img style={{ width: "200px", height: "200px" }} className='medium' src={`/uploads/${details.photo}`}></img></p>
          <h3>Name : {details.name}</h3>
          <h3>description : {details.description}</h3>
          <h3>Price : {details.price}</h3>
          <h3>Location : {details.location}</h3>
          
        </>
      ) : (
        <p> this product have no details </p>
      )}
      </div>
    </div>
  );
}
export default Details;

import React from "react";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import AlertContext from "../../context/alert/alertContext";
import axios from "axios";
import './editcontent.css'

 
 
 
function EditContent() {

  const alertContext = useContext(AlertContext);
  const { addAlert } = alertContext;
  const [details, setDetails] = useState({});
  const { id } = useParams();

  const [file , setFile ] = useState('');
  const [fileName , setFileName] = useState('please add a photo');

  const updateHandler = (e)=>{
    e.preventDefault()
     
    updateContent();
    getDetails();
  }
  const photoHandler = (e)=>{
      setFile(e.target.files[0])
      setFileName(e.target.files[0].name)

  }
  const changeHandler = (e)=>{
      setDetails({  ...details , [e.target.name]:e.target.value})
}
 const updateContent = async (e)=>{
     

     const formData = new FormData();
     formData.append('file', file);
     formData.append('name', details.name);
     formData.append('description', details.description);
     formData.append('price', details.price);
     const config = {
         headers:{
             Accept: "application/json",
             "Content-Type":"multipart/form-data"
         },
         withCredentials : true
     }
     try {
         const response = await axios.put(`http://localhost:5000/product/edit/${id}`,formData , config);
         console.log(response)
         
     } catch (error) {
         console.log(error)
     }
 }
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
    <div className= 'row center'>
      <div className='edit-comp'>
        
      
      {details !== undefined ? (
        <>
         <form onSubmit = {updateHandler}>
             <div className='medium'> 
             <img  src={`/uploads/${details.photo}`}></img>
             </div>
             <div className = "inputs">
                 <label htmlFor="name"  > Name </label>  
                 <input type = "text" name="name" value={details.name} onChange = {changeHandler} />                

                 <label htmlFor="description" >Description</label> 
                 <input type = "text" name="description" value={details.description}  onChange = {changeHandler}  />

                 <label htmlFor="description" >Price</label> 
                 <input type = "text" name="price" value={details.price}  onChange = {changeHandler}  />

                 <label className = "file-edit" htmlFor="file" > {fileName}</label> 
                 <input  type="file" name="file" id="file" onChange={photoHandler} />
            </div>  
             
            <input className = "edit-submit" type="submit" value="update" />
           </form>
           
          
        

        
          
        </>
      ) : (
        <p> this product have no details </p>
      )}
      </div>
    </div>
  );
}
export default EditContent;

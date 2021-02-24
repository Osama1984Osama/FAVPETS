import React from "react";
import { useState, useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import "./addContent.css"
import axios from "axios";

function AddContent() {
	const alertContext = useContext(AlertContext);
	const { addAlert } = alertContext;
	const [product, setProduct] = useState({
		name: "",
		description: "",
		price: "",
		location: "",
	
	});
	const [file , setFile] = useState('');
	const [fileName , setFileName] = useState(' please add photo');
	const handlePhoto= (e)=>{
		setFile(e.target.files[0]);
		setFileName(e.target.files[0].name)
	}

	const onChange = (e) => setProduct({ ...product, [e.target.name]: e.target.value });
	const onSubmit = async (e) => {
		e.preventDefault();
		const { name, description, price, location } = product;
		const formData = new FormData();

		
		if (name === "" || description === "" || price === "" || location === "") {
			addAlert("please enter all the fields", " alert-infos");
		}else{
			formData.append('file',file);
			formData.append('name',name);
			formData.append('description',description);
			formData.append('price',price);
			formData.append('location',location);

			try {
				const config = {
					heasers : {
						Accept: "application/json" ,
						"Content-Type":'multipart/form-data'

					},
					withCredentials: true
				
					
				};
				const result = await axios.post(
					"http://localhost:5000/product/add",
					formData,
					config
				);
				console.log(result.data)
				window.location = "/myContent";
			 
			} catch (error) {
				addAlert(error.response.data.msg);
			}
		}
	};
	return (
		<div className="main-user">
			<h1>
				<span>Add your Advertisment</span>
			</h1>
			<form onSubmit={onSubmit}>
			<div className="">
					<label htmlFor="file">Photo:</label>
					
					<input type="file" name="file"  onChange={handlePhoto} />
				</div>
				<div className="">
					<label>Product:</label>
					<input type="text" name="name" onChange={onChange} />
				</div>

				<div className="">
					<label>description :</label>
					<input type="text" name="description" onChange={onChange}/>
				</div>
				<div>
					<label>price</label>
					<input type="text" name="price" onChange={onChange}/>
				</div>
				<div>
					<label>location</label>
					<input type="text" name="location" onChange={onChange}/>
				</div>
				{/* <div>
					<label>Add Photo</label>
					<input type="file" name="photo"onChange={onChange} />
				</div> */}
				<input
					type="submit"
					value="Add Now "
					className="btn btn-info btn-block btnAddContent"
				/>
			</form>
		</div>
	);
}

export default AddContent;
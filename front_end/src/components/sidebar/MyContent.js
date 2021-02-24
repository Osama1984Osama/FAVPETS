import React from 'react'
import { useEffect, useState, useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import "./myContent.css"
import axios from "axios";
import { Link } from 'react-router-dom';



function MyContent() {
    const alertContext = useContext(AlertContext);
    const { addAlert } = alertContext;
    const [product, setProduct] = useState([]);
    const getData = async () => {
        // e.preventDefault();
        try {
            const config = {
                headers: { "Content-Type": "application/json" },
                withCredentials: true
            };
            const response = await axios.get(
                "http://localhost:5000/product/userProduct",
                config
            );
            console.log('data from server : ', response);
            if (response.data) {
                setProduct(response.data.products)
            }

        } catch (error) {
            addAlert(error.response.data.msg);
        }

    };

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className = "all-contents">
            <h1 className = 'head'>My Content</h1>
            <div className="content-main">
                {
                    product && product.map((item) => {
                        const contentId = `/editContent/${item._id}`
                        return <div className="contents">
                            <p>{item.photo ? <img style={{ width: "200px", height: "200px" }} src={`/uploads/${item.photo}`} /> : 'no photo '}</p>
                            <div className= 'cont'>
                                <h3> Name: {item.name}</h3>
                                <h3>Description: {item.description}</h3>
                                <h3> price: {item.price}</h3>
                                <h3> Location: {item.location}</h3>
                            </div>
                            <div className='edit'>
                            <Link to={contentId} >
                                Edit the product
                              </Link>
                            </div>
                            
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default MyContent

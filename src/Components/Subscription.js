import React from 'react';
import { useState , useEffect  } from 'react'
import {  Link } from "react-router-dom";

export default function Subscription() {
  return (
    <h1>hello </h1>
  )}



  
    // const [subscription, setSubscription] = useState([])

    // useEffect(() => {
    //   axios
    //     .get('http://127.0.0.1:8000/api/subscription/<int:id>')
    //     .then((res) => setCategory(res.data))
      
    // }, [])


    // const deleteCategory = (id) => {
    //     axiosInstance.delete(`/admin_operation/delete_category/${id}`)
    //     .then(res => 
    //       toast.success("you've been delete category !", {
    //           position: toast.POSITION.TOP_CENTER
    //         }),
    //       navigate('/adminmanage'))
    //   .catch(error => {
    //       console.error('There was an error!', error);
    //   });
    // };
    // <Link type="button" className="btn" to={"/deletecategory/" + use.id} style={{backgroundColor: "#74b9ff"}} onClick={() => deleteCategory(use.id)}>Delete Category</Link> 
// import { Route, Link } from 'react-router-dom'
// import { useContext } from 'react'
// import {AuthContext} from '../Context/AuthContext'

// const PrivateRoute = ({children, ...rest}) => {
//     let {profile} = useContext(AuthContext)
//     return(
//         <Route {...rest}>{!profile.is_admin ? <Link to="/" /> :   children}</Route>
//     )
// }

// export default PrivateRoute;

import React,{useState} from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {AuthContext} from '../Context/AuthContext'
import { useContext } from 'react'
import { axiosInstance } from '../utils/axiosInstance';

const PrivateRoute = () => {
    const {user} = useContext(AuthContext) // determine if authorized, from context or however you're doing it
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return  user.is_admin  ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
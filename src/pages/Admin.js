import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { axiosInstance } from "../utils/axiosInstance";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";

function Admin() {
  const { user } = useContext(AuthContext);
  const [users, setusers] = useState([]);
  const [books, setbooks] = useState([]);
  const [category, setcategory] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/admin_listing/list_users")
      .then((res) => {
        setusers(res.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/admin_listing/list_books")
      .then((res) => {
        setbooks(res.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/admin_listing/list_category")
      .then((res) => {
        setcategory(res.data);
      });
  }, []);
//   console.log(users);
//   console.log(books);
//console.log(category);
  

  return (
    <>
      <div className="container">
        <h1>admin panel </h1>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Users List</Accordion.Header>
            <Accordion.Body>
              <table border="2" className="table tableHover">
                <thead>
                <tr >
                  <th scope = 'col'>User Name</th>
                  <th scope = 'col'>Email</th>
                  <th scope = 'col'>gender</th>
                  <th scope = 'col'>Dateofbirth</th>
                  <th scope = 'col'>location</th>
                </tr>
                </thead>
                <tbody>
                {users.map((use) => {
                  return (
                    <tr  key={use.id}>
                      <td>{use.username}</td>
                      <td>{use.email}</td>
                      <td >{use.gender}</td>
                      <td>{use.date_of_birth}</td>
                      <td>{use.location}</td>
                    </tr>
                  );
                })}
                </tbody>
              </table>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Books Listing</Accordion.Header>
            <Accordion.Body>
            <table border="2" className="table tablePrimary">
            <thead>
                <tr >
                  <td scope = 'col'>title</td>
                  <td scope = 'col'>author</td>
                  <td scope = 'col'>category ID</td>
                  {/* <thead className="col-2">date_creation</thead> */}
                  <td scope = 'col'>status</td>
                  <td scope = 'col'>User ID</td>
                </tr>
                </thead>
                <tbody>
                {books.map((use) => {
                  return (
                    <tr  key={use.id}>
                      <td >{use.title}</td>
                      <td >{use.author}</td>
                      <td >{use.cat}</td>
                      {/* <tbody className="col-2">{use.date_creation}</tbody> */}
                      <td >{use.status}</td>
                      <td >{use.user}</td>
                    </tr>
                  );
                })}
                </tbody>
              </table>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Category Listing</Accordion.Header>
            <Accordion.Body>
            <table border="2" className="table tablePrimary">
                <thead>
                <tr >
                  <td scope = 'col'>Category Id</td>
                  <td scope = 'col'>Category Name</td>
                </tr>
                </thead>
                <tbody>
                {category.map((use) => {
                  return (
                    <tr  key={use.id}>
                      <td >{use.id}</td>
                      <td >{use.name}</td>
                     
                    </tr>
                  );
                })}
                </tbody>
              </table>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default Admin;

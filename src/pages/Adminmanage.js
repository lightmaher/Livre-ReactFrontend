import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Accordion from "react-bootstrap/Accordion";
import "react-toastify/dist/ReactToastify.css";
import "alertifyjs/build/css/alertify.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import './login.css';


function AdminOperation(props) {
  const [name, setName] = useState("");
  const { user } = useContext(AuthContext);
  const [users, setusers] = useState([]);
  const [books, setbooks] = useState([]);
  const [category, setcategory] = useState([]);
  const [blockuser, setBlockuser] = useState();

  const navigate = useNavigate();
  //delete category
  const deleteCategory = (id) => {
    axiosInstance
      .delete(`/admin_operation/delete_category/${id}`)
      .then(
        (res) =>
          toast.success("you've been delete category !", {
            position: toast.POSITION.TOP_CENTER,
          }),
        navigate("/adminmanage")
      )
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  //delete book
  const deleteBook = (id) => {
    axiosInstance
      .delete(`/admin_operation/delete_book/${id}`)
      .then(
        (res) =>
          toast.success("you've been delete book !", {
            position: toast.POSITION.TOP_CENTER,
          }),
        navigate("/adminmanage")
      )
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  //block
  const blockUser = (id) => {
    console.log(id);
    axiosInstance.post(`/admin_operation/block_user/${id}`).then((res) => {
      console.log("admin");
      console.log(res.data);
      setBlockuser(res.data);
    });
  };
  const unblockUser = (id) => {
    console.log(id);
    axiosInstance.post(`/admin_operation/unblock_user/${id}`).then((res) => {
      console.log("admin");
      console.log(res.data);
      setBlockuser(res.data);
    });
  };
  /////////////////////////////////////////////////////////////
  useEffect(() => {
    axiosInstance.get("/admin_listing/list_users").then((res) => {
      setusers(res.data);
    });
  }, []);
  useEffect(() => {
    axiosInstance.get("/admin_listing/list_books").then((res) => {
      setbooks(res.data);
    });
  }, []);
  useEffect(() => {
    axiosInstance.get("/admin_listing/list_category").then((res) => {
      setcategory(res.data);
    });
  }, []);
  return (
    <div className="row">
      <div className=" col-5 text-white position-relative leftsection ">
        <div className="position-absolute top-50 start-50 translate-middle ">
          <h1>Livre</h1>
          <h3>
            Your online book Library to you with Zero Cost ready for exchange or
            donate or more and more
          </h3>
        </div>
      </div>
      <div class="col-5">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "94vh" }}>
          <div className='form_text mt-3' style={{marginLeft:'9%'}}>
            <h1 className="signin">Admin Panel</h1>
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Users List</Accordion.Header>
                <Accordion.Body>
                  <table border="2" className="table tableHover">
                    <thead>
                      <tr className="text_header_table">
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">gender</th>
                        <th scope="col">Dateofbirth</th>
                        <th scope="col">location</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((use) => {
                        return (
                          <tr className="text_content_table" key={use.id}>
                            <td>{use.username}</td>
                            <td>{use.email}</td>
                            <td>{use.gender}</td>
                            <td>{use.date_of_birth}</td>
                            <td>{use.location}</td>
                            {use.is_blocked ? (
                              <td>
                                <Link
                                  type="button"
                                  className="btn"
                                  to="/"
                                  style={{ backgroundColor: "#2c9db7",color:"#ffffff" }}
                                  onClick={() => unblockUser(use.id)}
                                >
                                  UnBlock
                                </Link>{" "}
                              </td>
                            ) : (
                              <td>
                                <Link
                                  type="button"
                                  className="btn"
                                  to="/"
                                  style={{ backgroundColor: "#2c9db7",color:"#ffffff" }}
                                  onClick={() => blockUser(use.id)}
                                >
                                  Block
                                </Link>{" "}
                              </td>
                            )}
                            {/* <td><Link type="button" className="btn" to = "/" style={{backgroundColor: "#74b9ff"}} onClick={() => blockUser(use.id)}>Block</Link> </td> */}
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
                      <tr className="text_header_table">
                        <td scope="col">title</td>
                        <td scope="col">author</td>
                        <td scope="col">category ID</td>
                        {/* <thead className="col-2">date_creation</thead> */}
                        <td scope="col">status</td>
                        <td scope="col">User ID</td>
                        <td scope="col">Delete Book</td>
                      </tr>
                    </thead>
                    <tbody>
                      {books.map((use) => {
                        return (
                          <tr className="text_content_table" key={use.id}>
                            <td>{use.title}</td>
                            <td>{use.author}</td>
                            <td>{use.cat}</td>
                            {/* <tbody className="col-2">{use.date_creation}</tbody> */}
                            <td>{use.status}</td>
                            <td>{use.user}</td>
                            <td>
                              <button
                                type="submit"
                                className="btn"
                                style={{ backgroundColor: "#2c9db7",color:"#ffffff" }}
                                onClick={() => deleteBook(use.id)}
                              >
                                Delete
                              </button>{" "}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Category Listing
                  <Link
                    type="button"
                    className="btn offset-1"
                    to="/addcategory"
                    style={{ backgroundColor: "#2c9db7",color:"#ffffff" }}
                  >
                    Add Category
                  </Link>
                </Accordion.Header>
                <Accordion.Body>
                  <table border="2" className="table tablePrimary">
                    <thead>
                      <tr className="text_header_table">
                        <td scope="col">Category Name</td>
                        <td scope="col">Edit Category</td>
                        <td scope="col">Delete Category</td>
                      </tr>
                    </thead>
                    <tbody>
                      {category.map((use) => {
                        return (
                          <tr className="text_content_table" key={use.id}>
                            <td>{use.name}</td>
                            <td>
                              <Link
                                type="button"
                                className="btn"
                                to={"/editcategory/" + use.id}
                                style={{ backgroundColor: "#2c9db7",color:"#ffffff" }}
                              >
                                Edit
                              </Link>
                            </td>
                            <td>
                              <button
                                type="submit"
                                className="btn"
                                style={{ backgroundColor: "#2c9db7" ,color:"#ffffff" }}
                                onClick={() => deleteCategory(use.id)}
                              >
                                Delete
                              </button>{" "}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminOperation;

import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstance } from "../utils/axiosInstance";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import "alertifyjs/build/css/alertify.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./TermsOfUse.css";

function AdminOperation() {
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
  <div className="container" style={{marginTop:"6%"}}>
    <div className="terms p-5 mb-5 ">
        <h1 className="heading-text text-center mb-5 mt-5 fw-bold ">Admin Panal</h1>
        <div className="accordion ps-5 pe-5 " id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button fw-bolder fs-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Users List
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
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
                                  to="/adminmanage"
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
                                  to="/adminmanage"
                                  style={{ backgroundColor: "#2c9db7",color:"#ffffff" }}
                                  onClick={() => blockUser(use.id)}
                                >
                                  Block
                                </Link>{" "}
                              </td>
                            )}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
              </div>
            </div>
        </div>
          <div className="accordion-item ">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed fw-bolder fs-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Books Listing
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
              <table border="2" className="table tablePrimary">
                    <thead>
                      <tr className="text_header_table">
                        <td scope="col">title</td>
                        <td scope="col">author</td>
                        <td scope="col">category ID</td>
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
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed fw-bolder fs-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                  Category Listing
                  
            
                </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
              <table border="2" className="table tablePrimary">
                    <thead>
                      <tr className="text_header_table">
                        <td scope="col">Category Name
                        <Link
                    type="button"
                    className="btn  offset-1"
                    to="/addcategory"
                    style={{ backgroundColor:"#2c9db7",color:"#ffffff" }}
                  >
                    Add Category
                  </Link>  
                        </td>
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
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AdminOperation;
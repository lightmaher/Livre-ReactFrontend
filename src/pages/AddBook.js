import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "alertifyjs/build/css/alertify.css";
import "react-toastify/dist/ReactToastify.css";
import * as alertify from "alertifyjs";
import { toast } from "react-toastify";
import axios from "axios";
import { axiosInstance } from "../utils/axiosInstance";


export default function AddBook() {
  const navigate = useNavigate()

  const [cat , setcat] = useState([])
    useEffect( () => {
    axiosInstance.get('/categories').then(
      res => {
         setcat(res.data)
      })
  },[])
  const [AddBook, setAddBook] = useState({
    title: "",
    author: "",
    description: "",
    status: "",
    cat: "",
  });
  const [errAddBook, seterrAddBook] = useState({
    title: null,
    author: null,
    description: null,
    status: null,
    cat: null,
  });
  useEffect(() => {}, [errAddBook]);
  
  const update = (e) => {
    if (e.target.name === "title") {
      setAddBook({
        ...AddBook,
        title: e.target.value,
      });
      seterrAddBook({
        ...errAddBook,
        title: e.target.value === "" ? "this field is required" : null,
      });
    }
    if (e.target.name === "author") {
      setAddBook({
        ...AddBook,
        author: e.target.value,
      });
      seterrAddBook({
        ...errAddBook,
        author: e.target.value === "" ? "this field is required" : null,
      });
    }
    if (e.target.name === "description") {
      setAddBook({
        ...AddBook,
        description: e.target.value,
      });
      seterrAddBook({
        ...errAddBook,
        description: e.target.value === "" ? "this field is required" : null,
      });
    }
    if (e.target.name === "status") {
      setAddBook({
        ...AddBook,
        status: e.target.value,
      });
      seterrAddBook({
        ...errAddBook,
        status: e.target.value === "" ? "this field is required" : null,
      });
    }

    if (e.target.name === "cat") {
      setAddBook({
        ...AddBook,
        cat: e.target.value,
      });
      seterrAddBook({
        ...errAddBook,
        cat: e.target.value === "" ? "this field is required" : null,
      });
    }
    
  };
  const send = (e) => {
    e.preventDefault();
    for (var item in AddBook) {
      if (AddBook[item] === "") {
        seterrAddBook({
          ...errAddBook,
          title: AddBook.title === "" ? "this field is required" : null,
          author: AddBook.author === "" ? "this field is required" : null,
          description:
            AddBook.description === "" ? "this field is required" : null,
          status: AddBook.status === "" ? "this field is required" : null,
          cat: AddBook.cat === "" ? "this field is required" : null,
        })
        return 0 
      }
    }
    axiosInstance
      .post("add_book/", AddBook)
      .then(
        (res) =>
          toast.success("Book added successfully !", {
            position: toast.POSITION.TOP_CENTER,
          }),
        navigate("/")
      )
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  return (
    <div className="container mt-5">
      <h1 className="mt-2"> Add Book</h1>
      <form onSubmit={(e) => send(e)} className="border rounded p-3">
        <div class="mb-3">
          <label class="form-label">Book Title</label>
          <input
            type="text"
            className={
              errAddBook.title != null
                ? "border border-danger form-control"
                : "form-control"
            }
            onChange={(e) => update(e)}
            name="title"
          />
          <div class="form-text text-danger">{errAddBook.title} </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Book Author</label>
          <input
            type="text"
            className={
              errAddBook.author != null
                ? "border border-danger form-control"
                : "form-control"
            }
            onChange={(e) => update(e)}
            name="author"
          />
          <div class="form-text text-danger">{errAddBook.author}</div>
        </div>
        <div class="mb-3">
          <label class="form-label"> Status </label>
          <select
            name="status"
            onChange={(e) => update(e)}
            class="form-select"
            aria-label="Default select example"
          >
            <option selected>Select Status</option>
            <option value="exchange"> Exchange </option>
            <option value="donate"> Donate </option>
          </select>
        </div>

        <div class="mb-3">
          <label class="form-label"> Category </label>
          <select
            name="cat"
            onChange={(e) => update(e)}
            class="form-select"
            aria-label="Default select example"
          >
          <option selected>Select Category</option>

          {cat.map((cat) => (
            
              <option value={cat.id}>{cat.name}</option>
            ))}
            </select>
        </div>

      
        <div class="mb-3">
          <label class="form-label"> Description</label>
          <textarea
            className={
              errAddBook.description != null
                ? "border border-danger form-control"
                : "form-control"
            }
            onChange={(e) => update(e)}
            name="description"
          />
          <div class="form-text text-danger">{errAddBook.description}</div>
        </div>
               
        <button
          type="submit"
          class="btn btn-primary"
          disabled={
            errAddBook.title ||
            errAddBook.author ||
            errAddBook.description ||
            errAddBook.status ||
            errAddBook.cat
          }
        >
          {/* {" "} */}
          Submit
        </button>
      </form>
    </div>
  );
}

import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "alertifyjs/build/css/alertify.css";
import { toast } from "react-toastify";
import { axiosInstance } from "../utils/axiosInstance";
import '../pages/login.css';

function AddCategory(props) {
  //  const history = useHistory();
  const [postimage, setPostImage] = useState(null);

  const navigate = useNavigate();
  const [name, setName] = useState({
    name: "",
  });
  const [errname, seterrName] = useState({
    name: null,
  });
  useEffect(() => {}, [seterrName]);

  const add = (e) => {
    if (e.target.name === "name") {
    
      setName({
        name: e.target.value,
      });
      seterrName({
        name: e.target.value === "" ? "this field is required" : null,
      });
    }
    if (e.target.name === "image") {
      setPostImage({
        image: e.target.files,
      });
      console.log(e.target.files);
    }
  };
  const Addcategory = (e) => {
    e.preventDefault();
    if (name === "") {
      seterrName({
        name: name.name === "" ? "this field is required" : null,
      });
    }
    let formData = new FormData();
    formData.append("name", name.name);
    if (postimage) {
      formData.append("image", postimage.image[0]);
    }
    console.log(name);
    axiosInstance
      .post("createcat/", formData)
      .then(
        (res) =>
          toast.success("you've been adding category !", {
            position: toast.POSITION.TOP_CENTER,
          }),
        navigate("/adminmanage")
      )
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  return (
    <>
      <div className="row">
        <div className=" col-5 text-white position-relative leftsection ">
          <div className="position-absolute top-50 start-50 translate-middle ">
            <h1>Livre</h1>
            <h3>
              Your online book Library to you with Zero Cost ready for exchange
              or donate or more and more
            </h3>
          </div>
        </div>
        <div class="col-4">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "94vh" }}
          >
            <div>
              <h1 className="signin">Add Category</h1>
              <form
                className="text-left p-2 rounded"
                onSubmit={(e) => Addcategory(e)}
              >
                <div className="form_text mt-2">
                  <label htmlFor="name" class="form-label">
                    Category Name
                  </label>
                  <input
                    type="text"
                    class={
                      errname.name != null
                        ? "border border-danger form-control"
                        : "form-control"
                    }
                    id="name"
                    placeholder="Category name"
                    name="name"
                    onChange={(e) => add(e)}
                  />
                  <label class="form-label">Category Image </label>
                  <input
                    accept="image/*"
                    className="form-control"
                    id="post-image"
                    onChange={(e) => add(e)}
                    name="image"
                    type="file"
                  />
                  <div class="text-danger text-left mt-1">{errname.name}</div>
                </div>
                <button
                  type="submit"
                  className=" btn mt-3 login_edit"
                  style={{ backgroundColor: "#2c9db7", color: "#ffffff" }}
                  disabled={errname.name}
                >
                  {" "}
                  Add Category
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddCategory;

import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "alertifyjs/build/css/alertify.css";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../pages/login.css';

function EditCategory(props) {
  //  const history = useHistory();
  const navigate = useNavigate();
  const params = useParams();
  const [name, setName] = useState({
    name: " ",
  });
  const [errname, seterrName] = useState({
    name: null,
  });
  useEffect(() => {}, [seterrName]);
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/category/${params.id}`).then((res) => {
      console.log(res.data.name);
      setName({
        name: res.data.name,
      });
    });
  }, []);
  const update = (e) => {
    if (e.target.name === "name") {
      setName({
        name: e.target.value,
      });
      seterrName({
        name: e.target.value === "" ? "this field is required" : null,
      });
    }
  };
  const Editcategory = (e) => {
    e.preventDefault();
    if (name === "") {
      seterrName({
        name: name.name === "" ? "this field is required" : null,
      });
    }
    console.log(params);
    axiosInstance
      .post(`/admin_operation/edit_category/${params.id}`, name)
      .then(
        (res) =>
          toast.success("you've been editing category !", {
            position: toast.POSITION.TOP_CENTER,
          }),
        navigate("/adminmanage")
      )
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
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
      <div class="col-4">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "94vh" }}
        >
          <div>
            <h1 className="signin">Edit Category</h1>
            <form
              className="text-left p-2 rounded"
              onSubmit={(e) => Editcategory(e)}
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
                  value={name.name}
                  onChange={(e) => update(e)}
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
                Edit Category
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditCategory;

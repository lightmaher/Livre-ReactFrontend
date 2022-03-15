import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "alertifyjs/build/css/alertify.css";
import "react-toastify/dist/ReactToastify.css";
import * as alertify from "alertifyjs";
import { toast } from "react-toastify";
import axios from "axios";
import "./login.css";

export const Registerform = () => {
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  var validpassword = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"
  );
  const navigate = useNavigate();
  const [postimage, setPostImage] = useState(null);
  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    gender: "",
    date_of_birth: "",
    country: "",
    location: "",
    phone: "",
  });
  const [errregisterForm, seterrRegisterForm] = useState({
    name: null,
    email: null,
    username: null,
    password: null,
    password2: null,
    date_of_birth: null,
    country: null,
    location: null,
    phone: null,
  });
  useEffect(() => {}, [errregisterForm]);

  const update = (e) => {
    if (e.target.name === "name") {
      setRegisterForm({
        ...registerForm,
        name: e.target.value,
      });
      seterrRegisterForm({
        ...errregisterForm,
        name: e.target.value === "" ? "this field is required" : null,
      });
    }
    if (e.target.name === "email") {
      setRegisterForm({
        ...registerForm,
        email: e.target.value,
      });
      seterrRegisterForm({
        ...errregisterForm,
        email:
          e.target.value === ""
            ? "this field is required"
            : !validEmail.test(e.target.value)
            ? "email is not vaild !"
            : null,
      });
    }
    if (e.target.name === "image") {
      setPostImage({
        image: e.target.files,
      });
      console.log(e.target.files);
    }
    if (e.target.name === "username") {
      setRegisterForm({
        ...registerForm,
        username: e.target.value,
      });
      seterrRegisterForm({
        ...errregisterForm,
        username:
          e.target.value === ""
            ? "this field is required"
            : registerForm.username.includes(" ")
            ? "the user name should have no spaces"
            : null,
      });
    }
    if (e.target.name === "password") {
      setRegisterForm({
        ...registerForm,
        password: e.target.value,
      });
      seterrRegisterForm({
        ...errregisterForm,
        password:
          e.target.value === ""
            ? "this field is required"
            : e.target.value.length < 8
            ? "the password should have more than 8 characters"
            : !validpassword.test(e.target.value)
            ? " the password is shoud have contains at least one lowercase , one uppercase , at least one digit and special character"
            : null,
      });
    }
    if (e.target.name === "password2") {
      setRegisterForm({
        ...registerForm,
        password2: e.target.value,
      });
      seterrRegisterForm({
        ...errregisterForm,
        password2:
          e.target.value === ""
            ? "this field is required"
            : e.target.value !== registerForm.password
            ? "passwords dont match !"
            : null,
      });
    }
    if (e.target.name === "gender") {
      setRegisterForm({
        ...registerForm,
        gender: e.target.value,
      });
    }
    if (e.target.name === "date_of_birth") {
      setRegisterForm({
        ...registerForm,
        date_of_birth: e.target.value,
      });
      seterrRegisterForm({
        ...errregisterForm,
        date_of_birth: e.target.value === "" ? "this field is required" : null,
      });
    }
    if (e.target.name === "country") {
      setRegisterForm({
        ...registerForm,
        country: e.target.value,
      });
      seterrRegisterForm({
        ...errregisterForm,
        country: e.target.value === "" ? "this field is required" : null,
      });
    }
    if (e.target.name === "location") {
      setRegisterForm({
        ...registerForm,
        location: e.target.value,
      });
      seterrRegisterForm({
        ...errregisterForm,
        location: e.target.value === "" ? "this field is required" : null,
      });
    }
    if (e.target.name === "phone") {
      setRegisterForm({
        ...registerForm,
        phone: e.target.value,
      });
      seterrRegisterForm({
        ...errregisterForm,
        phone: e.target.value === "" ? "this field is required" : null,
      });
    }
  };
  const send = (e) => {
    e.preventDefault();
    for (var item in registerForm) {
      if (registerForm[item] === "") {
        seterrRegisterForm({
          ...errregisterForm,
          name: registerForm.name === "" ? "this field is required" : null,
          email: registerForm.email === "" ? "this field is required" : null,
          username:
            registerForm.username === "" ? "this field is required" : null,
          password:
            registerForm.password === "" ? "this field is required" : null,
        });
        return 0;
      }
    }
    let formData = new FormData();
    formData.append("date_of_birth", registerForm.date_of_birth);
    formData.append("email", registerForm.email);
    formData.append("gender", registerForm.gender);
    formData.append("country", registerForm.country);
    formData.append("location", registerForm.location);
    formData.append("password", registerForm.password);
    formData.append("password2", registerForm.password2);
    formData.append("phone", registerForm.phone);
    formData.append("username", registerForm.username);
    if (postimage) {
      formData.append("image", postimage.image[0]);
    }
    console.log(formData);
    axios
      .post("http://127.0.0.1:8000/api/register", formData)
      .then(
        (res) =>
          toast.success("you've been successfully registered !", {
            position: toast.POSITION.TOP_CENTER,
          }),
        navigate("/login")
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
              Your online Library with Zero cost. Get ready to exchange
              , donate .. and MUCH MORE !
            </h3>
          </div>
        </div>
        <div class="col-4">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "94vh" }}
          >
            <div>
              <h1 className="signin">Register in LIVRE</h1>
              <form onSubmit={(e) => send(e)} className="text-left p-2 rounded">
                <div className="form_text mt-2">
                  <label class="form-label">Email address</label>
                  <input
                    type="email"
                    className={
                      errregisterForm.email != null
                        ? "border border-danger form-control"
                        : "form-control"
                    }
                    onChange={(e) => update(e)}
                    name="email"
                  />
                  <div id="emailHelp" class="form-text text-danger">
                    {errregisterForm.email}{" "}
                  </div>
                  <label class="form-label">User name</label>
                  <input
                    type="text"
                    className={
                      errregisterForm.username != null
                        ? "border border-danger form-control"
                        : "form-control"
                    }
                    onChange={(e) => update(e)}
                    name="username"
                  />
                  <div id="emailHelp" class="form-text text-danger">
                    {errregisterForm.username}
                  </div>
                  <label class="form-label"> Gender </label>
                  <select
                    name="gender"
                    onChange={(e) => update(e)}
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select Gender</option>
                    <option value="male"> Male </option>
                    <option value="female"> Female </option>
                  </select>
                  <label class="form-label">Birth date</label>
                  <input
                    type="date"
                    className={
                      errregisterForm.username != null
                        ? "border border-danger form-control"
                        : "form-control"
                    }
                    onChange={(e) => update(e)}
                    name="date_of_birth"
                  />
                  <div class="form-text text-danger">
                    {errregisterForm.date_of_birth}
                  </div>

                  <label class="form-label">Country</label>
                  <input
                    type="text"
                    className={
                      errregisterForm.password != null
                        ? "border border-danger form-control"
                        : "form-control"
                    }
                    onChange={(e) => update(e)}
                    name="country"
                    id="exampleInputPassword1"
                  />
                  <div id="emailHelp" class="form-text text-danger">
                    {errregisterForm.country}
                  </div>
                  <label class="form-label">Loction</label>
                  <input
                    type="text"
                    className={
                      errregisterForm.password != null
                        ? "border border-danger form-control"
                        : "form-control"
                    }
                    onChange={(e) => update(e)}
                    name="location"
                    id="exampleInputPassword1"
                  />
                  <div id="emailHelp" class="form-text text-danger">
                    {errregisterForm.location}
                  </div>
                  <label class="form-label">Image </label>
                  <input
                    accept="image/*"
                    className="form-control"
                    id="post-image"
                    onChange={(e) => update(e)}
                    name="image"
                    type="file"
                  />
                  <label class="form-label">Phone</label>
                  <input
                    type="phone"
                    className={
                      errregisterForm.phone != null
                        ? "border border-danger form-control"
                        : "form-control"
                    }
                    onChange={(e) => update(e)}
                    name="phone"
                    id="exampleInputPassword1"
                  />
                  <div id="emailHelp" class="form-text text-danger">
                    {errregisterForm.phone}
                  </div>
                  <label class="form-label"> Password </label>
                  <input
                    type="password"
                    className={
                      errregisterForm.password != null
                        ? "border border-danger form-control"
                        : "form-control"
                    }
                    onChange={(e) => update(e)}
                    name="password"
                  />
                  <div class="form-text">
                    <div class="form-text text-danger">
                      {errregisterForm.password}
                    </div>
                  </div>
                  <label class="form-label"> Confirm Password </label>
                  <input
                    type="password"
                    className={
                      errregisterForm.confpassword != null
                        ? "border border-danger form-control"
                        : "form-control"
                    }
                    onChange={(e) => update(e)}
                    name="password2"
                  />
                  <div class="form-text">
                    <div class="form-text text-danger">
                      {errregisterForm.confpassword}
                    </div>
                  </div>
                </div>
                <button
                  className=" btn mt-3 login_edit"
                  style={{
                    backgroundColor: "#2c9db7",
                    color: "#ffffff",
                    width: "100%",
                  }}
                  type="submit"
                  class="btn btn-primary"
                  disabled={
                    errregisterForm.name ||
                    errregisterForm.confpassword ||
                    errregisterForm.password ||
                    errregisterForm.email ||
                    errregisterForm.username
                  }
                >
                  {" "}
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

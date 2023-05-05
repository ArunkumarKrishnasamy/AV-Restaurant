import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Registration() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      inputemail: "",
      inputpassword: "",
    },
    onSubmit: async (values) => {
      await axios.post("http://localhost:3001/register", values);
      alert("Registration Succesfull");
      navigate("/login");
    },
  });
  return (
    <div className="container">
      <h1 className="text-center">Registration Form</h1>
      <form className="" onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label for="username" className="form-label">
            User Name
          </label>
          <input
            type="username"
            className="form-control"
            id="username"
            name="username"
            aria-describedby="emailHelp"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
        </div>
        <div className="mb-3">
          <label for="inputemail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="inputemail"
            name="inputemail"
            aria-describedby="emailHelp"
            onChange={formik.handleChange}
            value={formik.values.inputemail}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="inputpassword" className="form-label">
            Password
          </label>
          <input
            type={"password"}
            className="form-control"
            id="inputpassword"
            name="inputpassword"
            onChange={formik.handleChange}
            value={formik.values.inputpassword}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg mb-3 ">
          Register
        </button>
        <br />
        <Link to={"/login"}>
          <a className="mt-3"> Already registered, Log In Here</a>
        </Link>
      </form>
    </div>
  );
}

export default Registration;

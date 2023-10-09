import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import {useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";


function Login() {
  const initialValues = { matricNo: "", pswd: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  const [, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(formValues); //validate
    // setIsSubmit(true);
    try {
      const response = await axios.post("http://localhost:3001/auth/login", formValues);
      alert("You Have Successfully login");
      setCookies("access_token", response.data.token);
      window.localStorage.setItem("name_id", response.data.name_id)
      window.localStorage.setItem("matricNo", response.data.matricNo)
      window.localStorage.setItem("email_id", response.data.email_id)
      console.log(response)

       navigate("/profile");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0) {
      //&& isSubmit
      // Perform signup or form submission logic here
      // You can make an API call to register the user, save data, etc.
      console.log("Form submitted successfully!");
    }
  }, [formValues, formErrors]); //isSubmit,

  // useEffect(() => {
  //   console.log(formErrors, formValues, );//isSubmit
  //   if (Object.keys(formErrors).length === 0 ) {//&& isSubmit
  //   }
  // }, [formValues,  formErrors]);//isSubmit,

  // const validate = (values) => {
  //   const errors = {};
  //   const matric_pattern = /^kasu\/\d{2}\/[a-zA-Z]{3}\/\d{4}$/i;

  //   if (!matric_pattern.test(values.matricNo)) {
  //     errors.matricNo = "*Incorrect Matric Number" ;
  //    }
  //    if (values.pswd.length < 4) {
  //     errors.pswd = "*password must be more than 4 characters";
  //   } else if (values.pswd.length > 8) {
  //     errors.pswd = "*password can not be more than 10 characters";
  //   }
  //   return errors;
  // };

  return (
    <div className="vh-100 bg-img ">
      <div className="container">
        <h2>Login</h2>
      </div>
      <div className="login-container mt-5 ">
        <div className="form-group">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Enter Matric Number"
              id="matricNo"
              required
              className="form-control mt-4"
              value={formValues.matricNo}
              onChange={handleChange}
            />
            {/* <h6>{formErrors.matricNo}</h6> */}

            <input
              type="password"
              placeholder="Enter Password"
              id="pswd"
              required
              className="form-control mt-4"
              value={formValues.pswd}
              onChange={handleChange}
            />
            {/* <h6>{formErrors.pswd}</h6> */}

            <button className="login-btn " id="btn-login">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;

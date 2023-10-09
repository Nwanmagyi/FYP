import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

function SignUp() {
  const initialValues = {
    name_id: "",
    email_id: "",
    matricNo: "",
    pswd: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    // setIsSubmit(true);
    try {
      await axios.post("http://localhost:3001/auth/register", formValues);
      alert("Sign up Successful. You can now Login.");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0) {
      //&& isSubmit
      // Perform signup or form submission logic here
      // You can make an API call to register the user, save data, etc.
      // console.log("Form submitted successfully!");
    }
  }, [formValues, formErrors]); //isSubmit,

  const validate = (values) => {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const matricPattern = /^kasu\/\d{2}\/[a-zA-Z]{3}\/\d{4}$/i;

    if (!emailPattern.test(values.email_id)) {
      errors.email_id = "*Incorrect Email";
    }
    if (!matricPattern.test(values.matricNo)) {
      errors.matricNo = "*Incorrect Matric Number";
    }
    if (values.pswd.length < 4) {
      errors.pswd = "*Password must be more than 4 characters";
    } else if (values.pswd.length > 8) {
      errors.pswd = "*Password cannot be more than 8 characters";
    }

    return errors;
  };

  return (
    <div className="vh-100 bg-img">
      <div className="container">
        <h2>SignUp</h2>
      </div>
      <div className="login-container mt-5">
        <div className="form-group">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Enter Name"
              id="name_id"
              required
              className="form-control mt-2"
              value={formValues.name_id}
              onChange={handleChange}
            />

            <input
              type="email"
              placeholder="Enter Email Address"
              id="email_id"
              required
              className="form-control mt-2"
              value={formValues.email_id}
              onChange={handleChange}
            />
            <h6>{formErrors.email_id}</h6>

            <input
              type="text"
              placeholder="Enter Matric Number"
              id="matricNo"
              required
              className="form-control mt-2"
              value={formValues.matricNo}
              onChange={handleChange}
            />
            <h6>{formErrors.matricNo}</h6>

            <input
              type="password"
              placeholder="Enter Password"
              id="pswd"
              required
              className="form-control mt-2"
              value={formValues.pswd}
              onChange={handleChange}
            />
            <h6>{formErrors.pswd}</h6>

            <button className="login-btn" id="btn-signup">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

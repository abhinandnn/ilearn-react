import React, { useState } from "react";

const Signup_valid = () => {
  const [inputs, setInputs] = useState({
    firstname:"",
    lastname:"",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    firstname:"",
    lastname:"",
    email: "",
    password: "",
  });
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validText=/^[a-zA-Z]*$/;
  const passwordValid=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });

    setError((error) => ({
      ...error,
      [name]:
        name === "firstname"
          ? validText.test(value.trim())
            ? ""
            : "First name must contain only letters"
          : name === "lastname"
          ? validText.test(value.trim())
            ? ""
            : "Last name must contain only letters"
          : name === "email"
          ? emailValid.test(value.trim())
            ? ""
            : "Enter a valid email"
          : name === "password"
          ? passwordValid.test(value.trim())
            ? ""
            : "Password must be at least 8 characters and include one letter and one number"
          : "",
    }));

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let hasErrors = false;
    for (const i in error) {
      if (error[i] !== "") {
        hasErrors = true;
      }
    }

    if (!hasErrors) {
      console.log("Form submitted:", inputs);
      localStorage.setItem("signupFname",inputs.firstname);
    
      localStorage.setItem("signupLname",inputs.lastname);
      localStorage.setItem("signupEmail",inputs.email);
      localStorage.setItem("signupPwd",inputs.password);
    } else console.log("fill all the details correctly!", error);

  };

  return { handleChange, inputs, handleSubmit, error };
};

export default Signup_valid;

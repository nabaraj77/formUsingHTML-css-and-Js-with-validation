import React, { useState } from "react";
import Input from "./Input";
import "./assets/Scss/style.scss";

const App = () => {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "userName",
      placeholder: "User Name",
      type: "text",
      label: "User Name",
      errormessage: "User Name should be atleast 3 characters long.",
      pattern: "^[A-Za-z0-9]{3,}$",
      autoComplete: "off",
      required: true,
    },
    {
      id: 2,
      name: "email",
      placeholder: "Email",
      type: "email",
      errormessage: "Email should be valid.",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "dob",
      placeholder: "Date",
      type: "date",
      label: "DOB",
    },
    {
      id: 4,
      name: "password",
      placeholder: "Password",
      type: "password",
      label: "Password",
      errormessage: "Password should be 8-12 characters long.",
      pattern: "^[A-Za-z0-9]{8,12}$",
      autoComplete: "off",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      placeholder: "Confirm Password",
      type: "password",
      label: "Confirm Password",
      pattern: values.password,
      errormessage: "Password doesn't match.",

      autoComplete: "off",
      required: true,
    },
  ];
  const onChange = (e) => {
    return setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    console.log(values);
  };

  return (
    <div className="formPage">
      <form action="" className="formFields" onSubmit={handleSubmit}>
        <h2 className="formTitle">Register</h2>
        {inputs.map((item) => {
          return (
            <Input
              {...item}
              key={item.id}
              value={values[inputs.name]}
              onChange={onChange}
            />
          );
        })}

        <button className="submitBtn">Submit</button>
      </form>
    </div>
  );
};

export default App;

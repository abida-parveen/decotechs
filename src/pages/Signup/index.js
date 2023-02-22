import axios from "axios";
import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/form/CustomButton";
import TextInput from "../../components/form/TextInput";
import {
  clearErrors,
  dispatchErrors,
} from "../../state-management/actions/error";

const Signup = (props) => {
  const formInitialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formControl, setFormControl] = useState(formInitialState);

  const navigate = useNavigate();

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormControl((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.clearErrors();
    axios
      .post("http://localhost:5000/api/auth/signup", formControl)
      .then((response) => {
        alert("account created successfully! Please login to continue");
        navigate("/login");
      })
      .catch((err) => {
        props.dispatchErrors(err.response);
        if (props.errors && !props.errors.data.errors[0].param) {
          alert(props.errors.data.errors[0].msg);
        }
      });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="pt-20 text-3xl font-bold mb-4">Sign Up</h1>
      <form
        className="bg-white shadow-lg rounded px-8 py-8 mb-4 w-11/12 lg:w-1/2"
        onSubmit={handleSubmit}
      >
        <TextInput
          label="Name"
          name="name"
          type="text"
          placeholder="John Doe"
          value={formControl.name}
          handleChange={handleChange}
        />
        <TextInput
          label="Email"
          name="email"
          type="email"
          placeholder="john@hotmail.com"
          value={formControl.email}
          handleChange={handleChange}
        />
        <TextInput
          label="Password"
          name="password"
          type="password"
          placeholder="Enter Password"
          value={formControl.password}
          handleChange={handleChange}
        />
        <TextInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          value={formControl.confirmPassword}
          handleChange={handleChange}
        />
        <CustomButton value="Signup" />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { dispatchErrors, clearErrors })(
  Signup
);

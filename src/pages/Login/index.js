import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import CustomButton from "../../components/form/CustomButton";
import TextInput from "../../components/form/TextInput";
import { dispatchErrors } from "../../state-management/actions/error";
import { setCurrentUser } from "../../state-management/actions/user";

const Login = (props) => {
  const formInitialState = {
    email: "",
    password: "",
  };
  const [formControl, setFormControl] = useState(formInitialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormControl((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/login", formControl)
      .then((response) => {
        props.setCurrentUser(response.data.authToken);
      })
      .catch((error) => {
        props.dispatchErrors(error.response);
        if (props.errors && !props.errors.data.errors[0].param) {
          alert(props.errors.data.errors[0].msg);
        }
      });
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="pt-20 text-3xl font-bold mb-4">Login</h1>
      <form
        className="bg-white shadow-lg rounded px-8 py-8 mb-4 w-11/12 lg:w-1/2"
        onSubmit={handleSubmit}
      >
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
        <CustomButton value="Login" />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (authToken) => dispatch(setCurrentUser(authToken)),
  dispatchErrors: (response) => dispatch(dispatchErrors(response)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

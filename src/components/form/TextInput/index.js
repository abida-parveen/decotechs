import React, { memo } from "react";
import { connect } from "react-redux";
import { validationError } from "./validateError";

const TextInput = (props) => {
  const { label, placeholder, type, value, handleChange, name, errors } = props;
  const error = validationError(errors, name);
  return (
    <div className="mb-4">
      <label
        className={`block text-gray-700 font-bold mb-2 ${
          error && "text-red-600"
        }`}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={`shadow border rounded w-full p-2 text-gray-700 focus:outline-none ${
          error && "border-red-600"
        } `}
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {error && <div className="text-red-600">{error}</div>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default memo(connect(mapStateToProps)(TextInput));

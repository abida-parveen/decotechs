import React from "react";

const CustomButton = (props) => {
  const { value, onClick } = props;
  return (
    <button
      className="block w-full py-2 px-4 border border-transparent rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default CustomButton;

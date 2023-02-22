import axios from "axios";
import React, { useState } from "react";
import CustomButton from "../../form/CustomButton";
import TextInput from "../../form/TextInput";

const Slab = () => {
  const [slabValues, setSlabValues] = useState([28, 30, 34, 38,]);
  const slabUnits = [100, 250, 500, 501]
  const handleSubmit = (e) => {
    e.preventDefault();
    const auth_token = localStorage.getItem("auth-token");
    if (auth_token) {
      axios
        .post(
          "http://localhost:5000/api/slab/createslab",
          { slabValues: slabValues },
          {
            headers: {
              "auth-token": `${auth_token}`,
            },
          }
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  };
  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const newSlabValues = [...slabValues];
    newSlabValues[index] = value;
    setSlabValues(newSlabValues);
  };
  return (
    <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-2xl mb-12">Create a new Slab</h1>
      <form
        className="shadow-lg w-1/2 mx-auto rounded p-8"
        onSubmit={handleSubmit}
      >
        {slabValues.map((slab, index) => (
          <div className="flex justify-between items-center w-full" key={index}>
            <div>
              Units:
              <span> {slabUnits[index]}</span>
            </div>
            <div className="flex justify-center items-center">
              <span className="block mr-4">Rate: </span>
              <TextInput
                type="number"
                name="rate"
                value={slab}
                handleChange={(e) => handleInputChange(e, index)}
              />
            </div>
          </div>
        ))}
        <CustomButton value="Submit" />
      </form>
    </div>
  );
};

export default Slab;

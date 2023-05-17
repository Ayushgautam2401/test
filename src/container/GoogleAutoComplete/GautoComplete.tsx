import React, { useState } from "react";
import Select from "react-select";


const options = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
  { value: "yellow", label: "Yellow" },
  { value: "purple", label: "Purple" },
];

const MyComponent = () => {
  return (
    <Select
      options={options}
      isClearable
      isSearchable
    />
  );
};

export default MyComponent;
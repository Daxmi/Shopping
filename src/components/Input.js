import React from "react";

export default function Input(props) {
  const { name, placeholder, type } = props;
  return (
    <div className="eachDetail">
      <div><h1>{name}</h1></div>
      <div>
        <input type={type} placeholder={placeholder} />
      </div>
    </div>
  );
}

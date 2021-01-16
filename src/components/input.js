import React from "react";

function Input(props) {
  const { handler, id, placeholder, type, name, label } = props;
  return (
    <div>
      <input
        onChange={handler}
        id={id}
        placeholder={placeholder}
        type={type}
        name={name}
        label={label}
      />
    </div>
  );
}

export default Input;

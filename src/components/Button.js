import React from "react";

function Button(props) {
  const { handler, value, id, type, name, label } = props;
  return (
    <div>
      <input
        type={type}
        value={value}
        id={id}
        name={name}
        label={label}
        onClick={handler}
      />
    </div>
  );
}

export default Button;

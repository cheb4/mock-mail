import React from "react";

function DisplayWindow(props) {
  const data = props.data;
  console.log(data === "");
  console.log(data);
  if (data === "") {
    return <div className="displayWindow"></div>;
  }
  return (
    <div className="displayWindow">
      <h3>Sender: {data.email}</h3>
      <h3>Subject: {data.subject}</h3>
      <div>{data.text}</div>
    </div>
  );
}

export default DisplayWindow;

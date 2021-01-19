import React from "react";

function Drawer(props) {
  const { sender, subject, id } = props;
  return (
    <div>
      <h3> sender: {sender}</h3>
      <h3> subject: {subject}</h3>
      <h4>id :{id}</h4>
    </div>
  );
}

export default Drawer;

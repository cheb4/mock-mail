import React from "react";

function Drawer(props) {
  const { sender, subject, id, handler } = props;
  return (
    <div className="drawer" onClick={() => handler(id)}>
      <p> sender: {sender}</p>
      <p> subject: {subject}</p>
      <p>id :{id}</p>
    </div>
  );
}

export default Drawer;

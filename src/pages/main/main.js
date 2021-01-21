import React from "react";

import { useState } from "react";
import Drawer from "./drawer";
import DisplayWindow from "./DisplayWindow";
// helper
// import logToConsole from "../../helper/helpers";

function Main() {
  const mockData = [
    {
      id: 1,
      email: "dgregr0@sbwire.com",
      subject: "Polarised",
      text:
        "felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus",
    },
    {
      id: 2,
      email: "ffendlow1@theguardian.com",
      subject: "challenge",
      text:
        "sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra",
    },
    {
      id: 3,
      email: "eingles2@google.nl",
      subject: "Implemented",
      text:
        "nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam",
    },
  ];

  const [email, setemail] = useState("");
  // const [emailId, setemailId] = useState("");
  // change after mocup
  // const getEmailAndSetDisplay = () => {
  //   const mailToDisplay = mockData[emailId];
  //   setemail(mailToDisplay);
  // };

  // change after mocup
  const getClickedId = (id) => {
    // console.log(id - 1);
    // setemailId(id - 1);
    //
    console.log(id);
    const mailToDisplay = mockData[id - 1];
    setemail(mailToDisplay);
  };

  const DrawerArray = () => {
    return (
      <div className="Drawers">
        {mockData.map((ele) => (
          <Drawer
            key={ele.id}
            id={ele.id}
            sender={ele.email}
            subject={ele.subject}
            handler={getClickedId}
          />
        ))}
      </div>
    );
  };
  return (
    <div className="main">
      <DrawerArray />
      <DisplayWindow data={email} />
    </div>
  );
}

export default Main;

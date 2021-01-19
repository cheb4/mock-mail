import React from "react";
import Drawer from "./drawer";
function Main() {
  const mockData = [
    {
      email: "bcanedo0@nba.com",
      subject: "concept",
      id: 1,
    },
    {
      email: "djaskowicz1@google.fr",
      subject: "responsive",
      id: 2,
    },
    {
      email: "dhazelgreave2@webmd.com",
      subject: "initiative",
      id: 3,
    },
    {
      email: "sbeels3@digg.com",
      subject: "project",
      id: 4,
    },
    {
      email: "gbagnal4@cargocollective.com",
      subject: "scalable",
      id: 5,
    },
    {
      email: "ghillock5@ihg.com",
      subject: "Fundamental",
      id: 6,
    },
    {
      email: "msolman6@blogtalkradio.com",
      subject: "adapter",
      id: 7,
    },
  ];

  return (
    <div>
      <h1>Hello there</h1>
      {mockData.map((ele) => (
        <Drawer
          key={ele.id}
          id={ele.id}
          sender={ele.email}
          subject={ele.subject}
        />
      ))}
    </div>
  );
}

export default Main;

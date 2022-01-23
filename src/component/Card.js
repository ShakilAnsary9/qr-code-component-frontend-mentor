import React from "react";
import "../component/Card.css";
import QR from "../images/image-qr-code.png";

function Card() {
  return (
    <div className="main-card">
      <div className="qr-img" style={{ backgroundImage: `url(${QR})` }}></div>
      <div className="content">
        <h1>
          Improve your front-end <br /> skills by building projects
        </h1>
        <h3>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </h3>
      </div>
    </div>
  );
}
export default Card;

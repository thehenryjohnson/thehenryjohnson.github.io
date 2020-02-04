import React from "react";
import "./style.css";

function HenryCard() {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt="Henry"
          src="https://m.media-amazon.com/images/I/61iddICNKCL._SS500_.jpg"
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> Henry
          </li>
          <li>
            <strong>Occupation:</strong> Musician, CEO & President of Aesthetic Power LLC
          </li>
          <li>
            <strong>Location:</strong> Murderapolis
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HenryCard;

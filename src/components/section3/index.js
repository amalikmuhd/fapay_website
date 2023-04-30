import React from "react";
import dodopaydashboard from "./image/Section-3-Image.png";
import "./sectiontwostyle.css";

const SectionThree = () => {
  return (
    <div className="sectionThree-background">
      <div className="topbox">
        <h1>View all your business data in real time</h1>
        <p>
          Monitor all business related transactions and inventory from on
          dashboard.
        </p>
      </div>
      <div className="second-row">
        <img src={dodopaydashboard} alt="" />
      </div>
    </div>
  );
};

export default SectionThree;

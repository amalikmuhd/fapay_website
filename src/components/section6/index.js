import React from "react";
import Image6Section from "./image/Section-6-Image.png";
import "./sectionSixStyle.css";

const SectionSix = () => {
  return (
    <div className="sectionSixContainer">
      <div className="header">
        <h1>Get dodopay Business app</h1>
        <h3>
          Earn extra for your business everything customers use the dodoapp to
          make payment transactions.
        </h3>
      </div>

      <div className="secsixBoxContainer">
        <div className="sec-6-col-1">
          <img src={Image6Section} alt="" />
        </div>

        <div className="sec-6-col-2">
          <h1>Sign up today for early access</h1>
          <div className="mixed-div-6">
            <h2>Get Started today</h2>
            <input
              className="Field-Section-6"
              type="text"
              name=""
              id=""
              placeholder="youremail@example.com"
            />
            <a href="">
              <div className="Section-6-buttonSignup ">
                <p>Sign Up</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;

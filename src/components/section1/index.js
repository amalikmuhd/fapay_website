import React from "react";
import Header from "../header";

import "./section-1-style.css";

const SectionOne = () => {
  return (
    <div className="sectionone">
      <Header />
      <div className="container">
        <div className="sec-1-col-1">
          <h1>
            Make sweet
            <br /> revenue with Fapay
            <br />
            Business
          </h1>

          <h3>
            With the Fapay Merchant app you can carry
            <br />
            out lightening fast transactions using Barcode
            <br />
            scan to pay technology.
          </h3>

          <div className="buttonContainer">
            <div className="getStartedButton">
              <p>
                <a href="">Get Started</a>
              </p>
            </div>

            <div className="learnMoreButton">
              <p>
                <a href="">Learn More</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;

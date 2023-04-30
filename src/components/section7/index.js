import React from "react";
import Section7Image4 from "./image/sect-7-Image4.png";
import "./sectionSevenStyle.css";

const SectionSeven = () => {
  return (
    <div className="sectionSevenContainer">
      <div className="header">
        <h1>Scale your business with easy payment from dodo</h1>
        <h3>
          Huge trendy collection of web screens and components. Fully
          customized.
        </h3>
      </div>

      <div className="section-7-row-2">
        <div className="sec-7-left-col">
          <div className="shiftright">
            <h1>EASY TO USE POS SYSTEMS</h1>
            <h4>
              An easy payment solution
              <br />
              which allows your clients
              <br />
              make payments via Point
              <br />
              of Sale.
            </h4>
            <br />
            <br />
            <h1>SCAN TO PAY</h1>
            <h4>
              Receive payments faster,
              <br />
              through cutting-edge
              <br />
              barcode technology
              <br />
              of Sale.
            </h4>
          </div>
        </div>

        <div className="sec-7-middle-col">
          <img src={Section7Image4} alt="" />
          <div className="inner-middle-col">
            <h1>MODERN MERCHANT APP</h1>
            <h4>
              The best technology to
              <br />
              power fast and seamless
              <br />
              transactions for your
              <br />
              business
            </h4>
            <br />
            <br />
            <h1>OPERATIONAL DASHBOARD</h1>
            <h4>
              Get a comprehensive,
              <br />
              overview of your business
              <br />
              performance at a glance
              <br />
              of Sale.
            </h4>
          </div>
        </div>

        {/* <div className="sec-7-right-col">
                <h1>MODERN MERCHANT APP</h1>
                <h4>The best technology to<br/>power fast and seamless<br/>transactions for your<br/>business</h4>
                <h1>OPERATIONAL DASHBOARD</h1><h4>Get a comprehensive,<br/>overview of your business<br/>performance at a glance<br/>of Sale.</h4>
            </div>   */}
      </div>

      <div className="sec-7-row-3">
        <h4>Sign up on Dodo and grow your business</h4>
      </div>

      <div className="sect-7-row-4">
        <div className="inner-7-row-1">
          <h3>Get Started today</h3>
          <input
            className="FieldBox"
            type="text"
            name=""
            id=""
            placeholder="youremail@example.com"
          />

          <a href="#">
            <div className="Section-7-buttonSignup">
              <p>Sign Up</p>
            </div>
          </a>
        </div>

        <div className="inner-7-row-2">
          <h1>
            Have questions
            <br /> about our product?
          </h1>
          <h4>
            Reach out to us at support@dodopay.ng to speak to our
            <br />
            dedicated support team.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;

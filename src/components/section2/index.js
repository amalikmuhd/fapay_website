import React from "react";
import PayBarcode from "./image/paycodeone.svg";
import "./sectiontwostyle.css";

const SectionOne = () => {
  return (
    <div className="sectiontwo">
      <div className="textBoxContainer">
        <h1>Built to help your business grow</h1>
        <p>
          The Dodo Business app is built for business owners looking to
          experience
          <br /> seamless transactions with the best technology to reduce queues
          and
          <br /> increase revenue by 89%.
        </p>
      </div>

      <div className="flex-container">
        <div className="box one">
          <div className="sect-2-mixed">
            <div className="Sec-2-left-Icon"></div>
            <h2>Pay with Barcode</h2>
          </div>

          <p>
            With dodo business your phone is all
            <br />
            you need to perform all transcations
            <br />
            with just one scan.
          </p>
          <div className="emptyDiv"></div>
        </div>

        <div className="box two">
          <div className="sect-2-mixed-2">
            <div className="Sec-2-middle-Icon"></div>
            <h2>Pay with Phone number</h2>
          </div>

          <p>
            WWith dodo business you don’t need
            <br />
            to memorize account numbers. All
            <br />
            you need is the phone number from
            <br />
            your contact list.
          </p>
        </div>

        <div className="box three">
          <div className="sect-2-mixed-3">
            <div className="Sec-2-right-Icon"></div>
            <h2>Pay Bills</h2>
          </div>

          <p>
            Dodo business offers you the
            <br />
            fastest way to pay all your bills
            <br />
            powered by excellent advanced
            <br />
            technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;

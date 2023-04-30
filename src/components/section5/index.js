import React from "react";

import ReceiveSection5 from "./icons/fa.png";
import Transferection5 from "./icons/fa2.png";
import InstantSection5 from "./icons/fa3.png";
import AppleBadge from "./icons/appstore.png";
import GoogleBadge from "./icons/google.png";
import RandomImageTwo from "./image/firstEdit.png";
import "./section5Style.css";

const SectionFive = () => {
  return (
    <div className="sectionFiveContainer">
      <div className="sect-5-header">
        <h1>The Future of payment in Africa!</h1>
        <h3>
          Make 2% everything your customers peform any transactions
          <br />
          using fapay business.
        </h3>
      </div>

      <div className="sect-5-row-container">
        <div className="sect-5-col-1">
          <h1>
            Explore the Fapaypay
            <br />
            bussiness app
          </h1>
          <h4>
            Experience the fastest and easiest way to
            <br />
            make all type of transcations.
          </h4>
          <nav>
            <ul>
              <li>
                <img src={ReceiveSection5} alt="" /> Receive payments seamlessly
              </li>
              <li>
                <img src={Transferection5} alt="" /> transfer money without hitches
              </li>
              <li>
                <img src={InstantSection5} alt="" />{" "}
                <p>
                  Get an instant business
                  <br /> account when you sign up
                  <br /> on Fapay business
                </p>
              </li>
            </ul>
          </nav>

          <div className="sect-5-downloadLinks">
            <img src={AppleBadge} alt="" style={{ width: 150, height: "auto" }} />
            <img src={GoogleBadge} alt="" style={{ width: 150, height: "auto" }} />
          </div>
        </div>

        <div className="sect-5-col-2">
          <img src={RandomImageTwo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionFive;

import React from "react";
import SectionFourImage from "./image/Image.svg";
import Col3Image1 from "./image/sec4-col3-image.svg";
import Col3Image2 from "./image/sec4-col3-image2.svg";
import "./sectionFourStyle.css";

const SectionFour = () => {
  return (
    <div className="bigContainer">
      <div className="bigContainer-header">
        <h1>Built for today's ambitious entrepreneurs</h1>
        <p>
          A payment platform that helps business owners retain customers
          <br />
          through quick payments. No fuss, No payment gateway, no
          <br /> waiting.
        </p>
      </div>
      <div className="ContainerRow-Box">
        <img src={SectionFourImage} alt="" />
        {/* <div className="ImageBoxContainer"></div> */}
      </div>
      <div className="ContainerColumn-Box">
        <div className="left">
          <div className="Sec-4-left-Icon"></div>
          <h4>No Cash, No card, Your phone is your Bank</h4>
          <h5>
            Do everything you can do at the bank with
            <br />
            your phone. No need for wallets or ATM cards.
          </h5>
        </div>
        <div className="right">
          <div className="Sec-4-right-Icon"></div>
          <h4>No more long queues, No more physical Money</h4>
          <h5>
            Increase your company revenue and
            <br /> reduce queues by 89.67%.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;

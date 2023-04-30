import React from "react";
import Logo from "./image/logo.svg";
import Facebook from "./image/facebook.svg";
import Twitter from "./image/twitter.svg";
import Linkedin from "./image/linkedin.svg";
import GooglePlus from "./image/google-plus.svg";
import "./sectionEightStyle.css";

const SectionEight = () => {
  return (
    <div className="sectionEightContainer">
      <div className="secEightBoxContainer">
        <div className="sec-8-col-1">
          <img src={Logo} alt="" />
          <div className="footerDownloadlinks">
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={Linkedin} alt="" />
            <img src={GooglePlus} alt="" />
          </div>
          {/* <div className="socialMediaLinks">
             <img src={Facebook} alt="" />
                <img src={Twitter} alt="" />
            </div> */}
        </div>

        <div className="sec-8-col-2">
          <h1>Information</h1>
          <h4>About Us</h4>
          <h4>Faq</h4>
          <h4>Contact us</h4>
          <h4>Blog</h4>
        </div>

        <div className="sec-8-col-3">
          <h1>Legal</h1>
          <h3>Terms and Conditions</h3>
          <h3>Privacy us</h3>
        </div>

        <div className="sec-8-col-4">
          <h1>Newsletter</h1>
          <input
            type="text"
            name=""
            id=""
            className="textFieldFooter"
            placeholder="youremail@example.com"
          />
          <div className="buttonSignUpFooter">
            <p>
              <a href="">SIGN UP</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionEight;

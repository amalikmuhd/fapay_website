// import Button from "../buttons";
// import Button from "../logobuttons";
import "./navbarStyle.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <a  className="logo-Link" href="">
            </a> */}
      <div className="links">
        <a href="/">Feactures</a>
        <a href="/">How it Works</a>
        <a href="/">Contact</a>
        <a href="/">About</a>
      </div>
      <div className="links">{/* <Button /> */}</div>
    </nav>
  );
};

export default Navbar;

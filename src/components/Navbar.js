import logo from '../assets/images/logo.svg';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <a  className="logo-Link" href="">
            <img src={logo} alt="" />
            </a>
            <div className="links">
                <a href="/">Feactures</a>
                <a href="/create">How it Works</a>
                <a href="/">Contact</a>
                <a href="/">About</a>
            </div>
            <div className="links">
                <a href="/">Login</a>
                <button className="open-an-account-button">
                <a href="/create">Open an account</a>
                </button>
                
               
            </div>
        </nav>
     );
}
 
export default Navbar;
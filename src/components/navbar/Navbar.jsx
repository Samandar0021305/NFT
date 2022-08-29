import "./navbar.css";

import Logo from "../../img/nav-logo.png"

function Navbar(){
    return(
        <nav className="navbar container">
         <img src={Logo} alt="logo" />
         <ul className="navbar__list">
            <li className="navbar__item">
                <a href="/">Marketplace</a>
            </li>
            <li className="navbar__item">
                <a href="/">Artists</a>
            </li>
            <li className="navbar__item">
                <a href="/">Contact</a>
            </li>
         </ul>
         <button>Buy Template</button>
        </nav>
    )
}

export default Navbar;
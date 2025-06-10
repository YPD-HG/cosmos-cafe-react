import { useHover } from "@uidotdev/usehooks"
import { NavLink } from "react-router-dom"
import "./navbar.css"

export function NavBar() {

    return <div className="navbar">
        <div className="left-navbar">
            <img className="logo" src="./assets/images/logo.png" alt="logo" />
        </div>
        <div className="right-navbar">

            <div className="navbar-links">
                {/* <NavLink activestyle={{ color:'#5754a8' }}> */}
                    <p>About</p>
                {/* </NavLink> */}
            </div>
            <div className="navbar-links" >
                {/* <NavLink activestyle={{ color:'#5754a8' }}> */}
                    <p>Menu</p>
                {/* </NavLink> */}
            </div>
            <div className="navbar-links">
                {/* <NavLink activestyle={{ color:'#5754a8' }}> */}
                    <p>Contact</p>
                {/* </NavLink> */}
            </div>
        </div>
    </div>
}


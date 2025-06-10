import { useHover } from "@uidotdev/usehooks"
import { NavLink } from "react-router-dom"
import "./navbar.css"


//Implement dynamic navigation highlighting and smooth scrolling:

// > * Underline the nav item based on the currently visible section.

// > * Clicking a nav item should smoothly scroll to its corresponding section.

// > * As the user scrolls, update the underline to reflect the current section in view.


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


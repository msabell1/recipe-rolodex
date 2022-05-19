import React from 'react';
import './SideBar.css';

const SideBar = ({ navbarOpen, closeMenu }) => {
    let sideBarClass = navbarOpen ? "sideBar open" : "sideBar";
    return (
        <div className={sideBarClass}>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                <li>
                    <Link
                        to="/search/"
                        activeClassName="active-link"
                        onClick={closeMenu}
                    >
                        Search Recipes
                    </Link>
                </li>
                <li>
                    <Link
                        to="/recipebook/"
                        activeClassName="active-link"
                        onClick={closeMenu}
                    >
                        My Recipe Book
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideBar;
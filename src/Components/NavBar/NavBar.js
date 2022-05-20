import { Link } from 'react-router-dom';
import Hamburger from './Hamburger'
import './NavBar.css';

const NavBar = ({ handleToggle, closeMenu, navbarOpen }) => {

    return (
        <div className="navBar">
            <nav className="navBar_container">
                <div className="hamburger_container">
                    <Hamburger handleToggle={handleToggle} navbarOpen={navbarOpen} />
                </div>
                <div className="spacer" />
                <h1 >
                    <Link to='/' className="siteTitle">
                        Recipe Rolodex
                    </Link>
                </h1>
                <div className="spacer" />
                <div className="navBar_links">
                    <ul>
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
                                My Recipe Cards
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
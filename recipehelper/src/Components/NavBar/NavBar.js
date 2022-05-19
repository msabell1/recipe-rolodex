import { Link } from 'react-router-dom';
import Hamburger from './Hamburger'
import './NavBar.css';

const NavBar = ({ handleToggle, navbarOpen, closeMenu }) => {

    return (
        <div className="navBar">
            <nav className="navBar_container">
                <div className="hamburger_container">
                    <Hamburger handleToggle={handleToggle} />
                </div>
                <h1 className="siteTitle">
                    <Link to='/'>
                        Recipe Helper
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
                                My Recipe Book
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
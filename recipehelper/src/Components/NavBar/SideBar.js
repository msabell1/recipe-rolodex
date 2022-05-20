import { Link } from 'react-router-dom';
import { FaHotdog } from "react-icons/fa"
import './SideBar.css';

const SideBar = ({ navbarOpen, closeMenu, handleToggle }) => {
    let sideBarClass = navbarOpen ? "sideBar open" : "sideBar";
    return (
        <div className={sideBarClass}>
            <button onClick={handleToggle} className="hotdog">
                <FaHotdog  style={{ color: "#7b7b7b", width: "40px", height: "40px", border: "none", background: "transparent" }} />
            </button>
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
                        My Recipe Cards
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideBar;
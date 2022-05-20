import { FaHamburger } from "react-icons/fa"


const Hamburger = ({ handleToggle, navbarOpen }) => {
    return (
        <button onClick={handleToggle} className="haburger">
            (<FaHamburger style={{ color: "#7b7b7b", width: "40px", height: "40px", border: "none", background: "transparent" }} />)
        </button>
    )
}
export default Hamburger;
import { FaHamburger } from "react-icons/fa"


const Hamburger = ({ handleToggle }) => {
    return (
        <button onClick={handleToggle}>
            (<FaHamburger className="haburger-icon" style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />)
        </button>
    )
}
export default Hamburger;
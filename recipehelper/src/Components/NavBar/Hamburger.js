import { FaHotdog, FaHamburger } from "react-icons/fa"

const Hamburger = ({ navBarOpen, handleToggle }) => {
    return (
        <button onClick={handleToggle}>
            {navBarOpen ?
                (<FaHotdog style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />)
                : (<FaHamburger style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />)
            }
        </button>
    )
}
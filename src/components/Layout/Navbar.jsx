import { useState } from "react"
import "../Layout/navbar.css"

const Navbar = () => {
    const [select, setSelect] = useState('')
    const handleSelect = (value) => {
        setSelect(value)
    }
    return (
        <section className="navbarSection">
            <div>
                <h2 style={{ margin: 0 }}>Developer</h2>
            </div>
            <nav>
                <ul>
                    <li className={select === "Experience" ? "efectoGlowA" : ""}>
                        <a href="#Experience" onClick={() => handleSelect("Experience")}>Experience</a>
                    </li>
                    <li className={select === "Projects" ? "efectoGlowA" : ""}>
                        <a href="#Projects" onClick={() => handleSelect("Projects")}>Projects</a>
                    </li>
                    <li className={select === "About" ? "efectoGlowA" : ""}>
                        <a href="#About" onClick={() => handleSelect("About")}>About me</a>
                    </li>
                    <li className={select === "Contact" ? "efectoGlowA" : ""}>
                        <a href="#Contact" onClick={() => handleSelect("Contact")}>Contact</a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Navbar

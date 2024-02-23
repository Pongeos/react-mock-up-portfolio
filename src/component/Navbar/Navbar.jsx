import Styles from './Navbar.module.css'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa6'

function Navbar() {

    const [isToggled, setIsToggle] = useState(false)

    function handleToggle() {
        setIsToggle(!isToggled) // false + false = true
    }

    return (
        <nav>
            <div className={Styles.container}>
                <div className={Styles.nav_con}>
                    <div className={Styles.logo}>
                        <a href="#">JD PORT</a>
                    </div>

                    <ul>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>

                    <div className={Styles.button}>
                        <a href="#">Hire Me</a>
                    </div>
                </div>

                {/* Mobile Menu */}
                <FaBars className={Styles.bar} onClick={handleToggle} />
                {isToggled ? (
                    <>
                        <ul className={Styles.mobile_menu}>
                            <li><a href="#">Skills</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <div className={Styles.mobile_button}>
                            <a href="#">Hire Me</a>
                        </div>
                    </>
                ) : null}
            </div>
        </nav>
    )
}

export default Navbar
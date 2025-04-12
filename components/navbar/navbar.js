import { useEffect } from "react";
import styles from "./navbar.module.css";

export default function Navbar({openPage}) {


    const handleButtonClick = (key) => {
        let navmenulinks = document.querySelectorAll('nav a');
        navmenulinks.forEach(item => {
            if(item.hash.replace("#" , '') == key)
            {
                item.classList.add(styles.active);
            }
            else
            {
                item.classList.remove(styles.active);
            }
        })
        openPage(key.toUpperCase())
    } 

    return (
        <nav className={`${styles.navmenu}`} data-aos="zoom-out">
            <ul>
                <li key={"hero"} onClick={() => handleButtonClick("hero")}><a  className={`${styles.active} rounded-circle`}><i className="bi bi-person navicon"></i></a></li>
                <li key={"experience"} onClick={() => handleButtonClick("experience")}><a  className={`rounded-circle`}><i className="bi bi-briefcase navicon"></i></a></li>
                <li key={"skillset"} onClick={() => handleButtonClick("skillset")}><a  className={`rounded-circle`}><i className="bi bi-code-square navicon"></i></a></li>
                <li key={"project"} onClick={() => handleButtonClick("project")}><a  className={`rounded-circle`}><i className="bi bi-box navicon"></i></a></li>
                <li key={"connect"} onClick={() => handleButtonClick("connect")}><a className={`rounded-circle`}><i className="bi bi-chat-square-quote navicon pb-0"></i></a></li>
            </ul>
        </nav>
    );
}

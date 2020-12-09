import React from 'react';
import headerimg from "../images/Dogs_team.jpg"
import styles from "./Header.module.css";

const Header = () => {

    return (<div>
        <img src={headerimg} className={styles.img} alt="puppy's team"/>
        <h1 className={styles.title}>PUPPY'S HOME</h1>
    </div>)
}


export default Header;
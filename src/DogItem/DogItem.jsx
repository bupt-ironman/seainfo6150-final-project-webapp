import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import styles from "./DogItem.module.css"

const DogItem = (props) => {


    return (<div className={styles.card}>
        <img src={props.dog.img} alt={props.dog.name}/>
        <h2>{props.dog.name}</h2>
        <h3>{props.dog.age}</h3>
        <Link to="/apply">

        <button>interested!</button>
        </Link>
        </div>);
}


export default DogItem;
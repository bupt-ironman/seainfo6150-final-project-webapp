import React from "react";
import styles from "./DogItem.module.css"

const DogItem = (props) => {

    function interested(e) {
        return 0;
    }

    return (<div className={styles.card}>
        <img src={props.dog.img} alt={props.dog.name}/>
        <h2>{props.dog.name}</h2>
        <h3>{props.dog.age}</h3>
        <button  onClick={interested}>interested!</button>
    </div>)
}


export default DogItem;
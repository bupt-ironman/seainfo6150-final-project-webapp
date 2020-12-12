import React, { useState } from 'react';

import styles from "./Apply.module.css";
import dogs from "../data/dogs";

const Apply = () => {

    const [submittedForm, setSubmittedForm] = useState();

    function onSubmit(e) {
        e.preventDefault();
        console.log(e.target);
        const data = new FormData(e.target);
        setSubmittedForm(data);
    };


    return (
        <div>
            { submittedForm ? (
            <div>Thank you for applying, {submittedForm.get("myName")}!</div>
        ) : (
        <div className={styles.application}>
            <h1>Apply for adoption</h1>
            <div>
            <form onSubmit={onSubmit}>
                <div className={styles.formItem}>
                <label htmlFor="myName">Your name</label>
                <input type="text" name="myName" id="myNameId"/>
                </div>

                <div className={styles.formItem}>
                <label htmlFor="myInterestedDog">puppy's name</label>
                <select name="myDog" id="myDogId">
                    {
                        dogs.map(dog => {
                            return <option value = {dog.name}>{dog.name}</option>
                        })
                    }
                </select>
                </div>

                <div className={styles.formItem}>
                    <label htmlFor="reason">Your reason</label>
                    <input type="text" name="myReason"id="reason"/>
                </div>
                <div className={styles.formItem}>
                    <label htmlFor="phone">Your phone number</label>
                    <input type="text" name="myphone"id="phoneId"/>
                </div>
                <div className={styles.formItem}>
                    <label htmlFor="email">Your email</label>
                    <input type="text" name="myEmail"id="emailId"/>
                </div>
                <input type="submit" value="Send it" />
            </form>
            </div>
        </div>
    )}
        </div> );
};

export default Apply;

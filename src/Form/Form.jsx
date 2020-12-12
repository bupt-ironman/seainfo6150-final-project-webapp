import React, { useState } from "react";

const Form = () => {
  const [submittedForm, setSubmittedForm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  };

  return (
    <div>
      {
        submittedForm ? (
          <div>Thank you for subscribing, {submittedForm.get("myName")}!</div>
        ) : (
          <form onSubmit={onSubmit}>
            <label htmlFor="myNameId">Your name</label>
            <input type="text" name="myName" id="myTextId"/>

            <label htmlFor="myDropdownId">Input</label>
            <select name="myDropdown" id="myDropdownId">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="trans">Trans</option>
            </select>

            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="myEmail"/>
            <input type="submit" value="subscribe" />
          </form>
        )
      }
    </div>
  )
}

export default Form

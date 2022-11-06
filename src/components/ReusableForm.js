import React from "react";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.onClickingSubmit}>
        <hr />
        <h3>Names</h3>
        <input type="text" name="names" placeholder="Names" />
        <h3>Location</h3>
        <input type="text" name="location" placeholder="Location" />
        <h3>Issue</h3>
        <textarea name="issue" placeholder="Describe the issue.." />
        <br />
        <button type="submit">{props.buttonText}</button>
        <hr />
      </form>
    </React.Fragment>
  );
}

export default ReusableForm;

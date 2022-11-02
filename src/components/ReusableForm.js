import React from "react";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <h3>Reusable Form</h3>
      <form onSubmit={props.onClickingSubmit}>
        <input type="text" name="names" placeholder="Names" />
        <input type="text" name="location" placeholder="Location" />
        <textarea name="issue" placeholder="Describe the issue.." />
        <button>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

export default ReusableForm;

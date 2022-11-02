import React from "react";
import ReusableForm from "./ReusableForm";
import { v4 } from "uuid";

function NewTicketForm(props) {
  function handleClickSubmit(event) {
    event.preventDefault();

    props.onAddingNewTicket({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <ReusableForm onClickingSubmit={handleClickSubmit} buttonText="Submit New Ticket" />
    </React.Fragment>
  );
}

export default NewTicketForm;

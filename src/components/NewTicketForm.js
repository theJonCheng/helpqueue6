import React from "react";
import { v4 } from "uuid";

function NewTicketForm(props) {
  function handleClickSubmit(event) {
    event.preventDefault();

    props.onAddingNewTicket = {
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: v4(),
    };
  }

  return (
    <React.Fragment>
      <h3>New Ticket Form</h3>
    </React.Fragment>
  );
}

export default NewTicketForm;

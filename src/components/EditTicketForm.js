import React from "react";
import ReusableForm from "./ReusableForm";

function EditTicketForm(props) {
  const { ticket } = props;

  function handleEditFormSubmit(event) {
    event.preventDefault();
    props.onEditingTicket({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: ticket.id,
    });
  }
  return (
    <React.Fragment>
      <h2>Edit Ticket Form</h2>
      <ReusableForm onClickingSubmit={handleEditFormSubmit} buttonText="Update Ticket" />
    </React.Fragment>
  );
}

export default EditTicketForm;

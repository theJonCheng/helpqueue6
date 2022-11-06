import React from "react";

function TicketDetails(props) {
  const { ticket } = props;
  return (
    <React.Fragment>
      <hr />
      <h2>Ticket Details</h2>
      <hr />
      <h3>{ticket.names}</h3>
      <p>{ticket.location}</p>
      <p>
        <em>{ticket.issue}</em>
      </p>
      <hr />
      <button onClick={props.onClickingEdit}>Edit Ticket</button>
      <hr />
    </React.Fragment>
  );
}

export default TicketDetails;

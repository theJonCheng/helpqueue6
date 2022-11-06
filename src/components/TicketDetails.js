import React from "react";

function TicketDetails(props) {
  const { ticket } = props;
  return (
    <React.Fragment>
      <hr />
      <h2>Ticket Details</h2>
      <hr />
      <h3>{ticket.names}</h3>
      <h3>{ticket.location}</h3>
      <p>
        <em>{ticket.issue}</em>
      </p>
      <hr />
    </React.Fragment>
  );
}

export default TicketDetails;

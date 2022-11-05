import React from "react";
import Ticket from "./Ticket";

function TicketList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.ticketList.map((ticket) => (
        <Ticket whenTicketClicked={props.onSelectingTicket} names={ticket.names} location={ticket.location} issue={ticket.issue} id={ticket.id} />
      ))}
    </React.Fragment>
  );
}

export default TicketList;

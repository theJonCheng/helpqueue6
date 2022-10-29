import React from "react";
import Ticket from "./Ticket";

function TicketList() {
  const ticketList = [
    {
      names: "Homer and Bart",
      location: "Springfield Elementary",
      issue: "Need a ride.",
    },
    {
      names: "Lisa",
      location: "Library",
      issue: "Lost library card",
    },
  ];
  return (
    <React.Fragment>
      <h2>List of Tickets</h2>
      <hr />
      {ticketList.map((ticket) => (
        <Ticket names={ticket.names} location={ticket.location} issue={ticket.issue} />
      ))}
    </React.Fragment>
  );
}

export default TicketList;

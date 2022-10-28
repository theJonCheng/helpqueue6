import React from "react";
import Ticket from "./Ticket";

function TicketList() {
  return (
    <React.Fragment>
      <h2>List of Tickets</h2>
      <hr />
      <Ticket names="Homer and Bart" location="Springfield Elementary" issue="Need a ride." />
    </React.Fragment>
  );
}

export default TicketList;

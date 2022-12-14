import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props) {
  const { ticket, onClickingDelete } = props;
  return (
    <React.Fragment>
      <hr />
      <h2>Ticket Detail</h2>
      <hr />
      <h3>{ticket.names}</h3>
      <p>{ticket.location}</p>
      <p>
        <em>{ticket.issue}</em>
      </p>
      <hr />
      <button onClick={props.onClickingEdit}>Edit Ticket</button>
      <button onClick={() => onClickingDelete(ticket.id)}>Delete Ticket</button>
      <hr />
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.array,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func,
};

export default TicketDetail;

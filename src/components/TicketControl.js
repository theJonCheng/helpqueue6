import React from "react";
import TicketList from "./TicketList";
import NewTicketForm from "./NewTicketForm";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formShowing: false,
      mainTicketList: [],
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({ formShowing: !prevState.formShowing }));
  };

  render() {
    let currentlyDisplaying = null;
    let buttonText = null;

    if (this.state.formShowing) {
      currentlyDisplaying = <NewTicketForm />;
      buttonText = "Return to Ticket List";
    } else {
      currentlyDisplaying = <TicketList />;
      buttonText = "Create New Ticket";
    }

    return (
      <React.Fragment>
        {currentlyDisplaying}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TicketControl;

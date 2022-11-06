import React from "react";
import TicketList from "./TicketList";
import NewTicketForm from "./NewTicketForm";
import TicketDetail from "./TicketDetail";
import EditTicketForm from "./EditTicketForm";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formShowing: false,
      mainTicketList: [],
      selectedTicket: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedTicket != null) {
      this.setState({
        formShowing: false,
        selectedTicket: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({ formShowing: !prevState.formShowing }));
    }
  };

  handleAddNewTicket = (ticket) => {
    const newMainTicketList = this.state.mainTicketList.concat(ticket);
    this.setState({
      formShowing: false,
      mainTicketList: newMainTicketList,
    });
  };

  handleSelectTicket = (id) => {
    const selectedTicket = this.state.mainTicketList.filter((ticket) => ticket.id === id)[0];
    this.setState({ selectedTicket: selectedTicket });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditTicket = (editedTicket) => {
    const editedMainTicketList = this.state.mainTicketList.filter((ticket) => ticket.id !== this.state.selectedTicket.id).concat(editedTicket);
    this.setState({
      mainTicketList: editedMainTicketList,
      selectedTicket: null,
      editing: false,
    });
  };

  render() {
    let currentlyDisplaying = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyDisplaying = <EditTicketForm ticket={this.state.selectedTicket} onEditingTicket={this.handleEditTicket} />;
      buttonText = "Return to Ticket List";
    } else if (this.state.selectedTicket != null) {
      currentlyDisplaying = <TicketDetail ticket={this.state.selectedTicket} onClickingEdit={this.handleEditClick} />;
      buttonText = "Return to Ticket List";
    } else if (this.state.formShowing) {
      currentlyDisplaying = <NewTicketForm onAddingNewTicket={this.handleAddNewTicket} />;
      buttonText = "Return to Ticket List";
    } else {
      currentlyDisplaying = <TicketList ticketList={this.state.mainTicketList} onSelectingTicket={this.handleSelectTicket} />;
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

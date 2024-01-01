/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

class NoteHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onSearchHandler(event) {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        searchQuery: event.target.value,
      };
    });
    this.props.searchNote(this.state);
  }

  render() {
    return (
      <nav className="note-app__header">
        <h1>Notes</h1>
        <input
          type="text"
          placeholder="Search notes..."
          onChange={this.onSearchHandler}
        />
      </nav>
    );
  }
}

export default NoteHeader;

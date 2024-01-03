/* eslint-disable react/prop-types */
import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value.slice(0, this.state.charLimit),
      };
    });
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({
      title: "",
      body: "",
    });
  }

  render() {
    const charLimit = 50;
    return (
      <form className="note-input" onSubmit={this.onSubmitHandler}>
        <h2 className="note-input-title">Make a Note</h2>
        <p className="note-input__title__char-limit">
          Remaining Characters: {charLimit - this.state.title.length}
        </p>
        <input
          type="text"
          placeholder="Title for your notes..."
          onChange={this.onTitleChangeHandler}
          value={this.state.title}
        />
        <textarea
          className="note-input__body"
          placeholder="Content for your notes..."
          onChange={this.onBodyChangeHandler}
          value={this.state.body}
        ></textarea>
        <button type="submit">Add Note</button>
      </form>
    );
  }
}

export default NoteInput;

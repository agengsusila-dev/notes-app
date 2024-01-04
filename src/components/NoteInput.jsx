/* eslint-disable react/prop-types */
import React from "react";
import { Toaster, toast } from "react-hot-toast";

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
    const title = event.target.value;
    const charLimit = 50;

    if (title.length > charLimit) return;

    this.setState(() => {
      return {
        title,
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
    if (this.state.title === "" && this.state.body === "") {
      toast.error("Note's title and body cannot be empty!", { icon: "😑" });
      return;
    }
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
        <Toaster />
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

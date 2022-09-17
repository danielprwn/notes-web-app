import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 300;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    } else {
      alert("You need to add a note! :)");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="10"
        cols="12"
        placeholder="Write something here..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Characters Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save Note!
        </button>
      </div>
    </div>
  );
};

export default AddNote;

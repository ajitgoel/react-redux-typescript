import React, { ChangeEvent } from "react";

interface NewNoteInputProps {
  addNote(note: string): void;
}

//NewNoteInput is a React function component that takes props of type NewNoteInputProps.
export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = React.useState("");

//ChangeEvent is the type of event that's triggered when the value of an element changes, and it takes an 
//additional type argument to indicate the exact type of element, which in our case is HTMLInputElement.
  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const onAddNoteClick = () => {
    addNote(note);
    setNote("");
  };

  return (
    <div>
      <input
        onChange={updateNote}
        value={note}
        type="text"
        name="note"
        placeholder="Note"
      />
      <button onClick={onAddNoteClick}>Add note</button>
    </div>
  );
};

export default NewNoteInput;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NewNoteInput } from "./NewNoteInput";
//useSelector hook from react-redux: A selector is a function that parses the state and gives back the required slice of it.
//useDispatch hook that gives us access to a function that can dispatch actions to our store. 
//We can use it with our addNote callback to dispatch the ADD_NOTE action.
import { useSelector, useDispatch  } from "react-redux";
import { NotesState } from "./notesReducer";
import { addNote } from "./actions";

function App() {
  //useSelector hook takes a function that receives the state as a parameter, and returns a specific part of it.
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
    </>
  );
}

export default App;

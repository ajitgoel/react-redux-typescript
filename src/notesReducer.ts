//Reducers are pure functions that are used to populate new values for any piece of state. 
//A reducer takes two parameters - the previous state value, and 
//an action that contains a payload that is used to a'er the state value.
export interface NotesState {
    notes: string[];//an array of notes that have been added. 
  }
  //The initialState represents the state at the point when the app is loaded, where there are no notes saved yet.
  const initialState = {
    notes: [],
  };
  //If we would like to add more actions, we can define them separately & combine them together using a TypeScript union type.
  export type Action = { type: "ADD_NOTE"; payload: string };
  export const notesReducer = (
    state: NotesState = initialState,
    action: Action
  ) => {
    switch (action.type) {
      case "ADD_NOTE": {
        return { ...state, notes: [...state.notes, action.payload] };
      }
      default:
        return state;
    }
  };
  
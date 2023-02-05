//Redux store that manages the state of our application by using our notesReducer. 
import { createStore } from "redux";
import { notesReducer } from "./notesReducer";
export const store = createStore(notesReducer);
import React from "react";
import ReactDOM from "react-dom";
import './style.scss';
import NotesList from "./components/NotesList";
import Note from "./components/Note";

const App = () => {

  return (
    <>
      <div className="notes-list">
        <NotesList />
      </div>
      <div className="note-wrapper">
        <Note />
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
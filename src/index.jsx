import React from "react";
import ReactDOM from "react-dom";
import './style.scss';
import NotesList from "./components/NotesList";
import Note from "./components/Note";

const App = () => {
  // Check if localStorage has been updated
  const [updateStorage, setUpdateStorage] = React.useState(0);

  const handleLocalStorage = (length) => {
    setUpdateStorage(updateStorage + length);
  }

  return (
    <>
      <div className="notes-list">
        <NotesList onDeleteNote={handleLocalStorage}/>
      </div>
      <div className="note-wrapper">
        <Note onNewNote={handleLocalStorage} />
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
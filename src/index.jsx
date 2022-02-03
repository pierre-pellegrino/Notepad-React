import React from "react";
import ReactDOM from "react-dom";
import './style.scss';
import NotesList from "./components/NotesList";
import Note from "./components/Note";

const App = () => {
  // Check if localStorage has been updated
  const [updateStorage, setUpdateStorage] = React.useState(0);

  // Loads a particular note
  const [noteToLoad, setNoteToLoad] = React.useState(-1);

  const handleLocalStorage = (length) => {
    setUpdateStorage(updateStorage + length);
  }

  const handleLoadNote = (noteIndex) => {
    setNoteToLoad(noteIndex);
  }

  return (
    <>
      <div className="notes-list">
        <NotesList onDeleteNote={handleLocalStorage} onLoadNote={handleLoadNote} />
      </div>
      <div className="note-wrapper">
        <Note onNewNote={handleLocalStorage} noteIndex={noteToLoad} onNoteIndex={handleLoadNote}/>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
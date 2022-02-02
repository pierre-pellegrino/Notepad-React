import React from 'react';
import NoteInput from '../NoteInput';
import './note.scss';

const Note = () => {
  const [title, setTitle] = React.useState();
  const [content, setContent] = React.useState();

  const handleChangeTitle = (value) => {
    setTitle(value);
  }

  const handleChangeContent = (value) => {
    setContent(value);
  }

  return (
    <div className="note-right-wrapper">
      <div className="note-display">
        <h1 className="note-title">{title}</h1>
        <div dangerouslySetInnerHTML={{__html: content}}>

        </div>
      </div>
      <div className="note-form">
        <NoteInput onChangeTitle={handleChangeTitle} onChangeContent={handleChangeContent} />
      </div>
    </div>
  );
};

export default Note;
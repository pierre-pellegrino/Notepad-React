import React from 'react';
import './noteinput.scss';

const NoteInput = ({onChangeTitle, onChangeContent}) => {
  const handleTitleInput = (e) => {
    onChangeTitle(e.target.value);
  }

  const handleContentInput = (e) => {
    onChangeContent(e.target.value);
  }

  return (
    <>
      <div className="inputs-wrapper">
        <input type="text" id="title-input" onChange={handleTitleInput} placeholder="Titre de votre note"></input>
        <textarea id="text-input" onChange={handleContentInput} placeholder="Contenu de votre note"></textarea>
      </div>
    </>
  );
};

export default NoteInput;
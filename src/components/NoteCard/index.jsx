import React from 'react';
import './notecard.scss';

const NoteCard = ({nKey, nValue, index, onDeleteNote}) => {

  const handleNoteClick = (e) => {
    console.log(localStorage.key(index))
  }

  const handleDeleteNote = (e) => {
    localStorage.removeItem(localStorage.key(index));
    onDeleteNote(-1);
  }

  return (
    <div className="note-card-wrapper">
      <div onClick={handleNoteClick}>
        <h2>{nKey}</h2>
        <p>{nValue.replace(/<\/?[^>]+(>|$)/g, "").slice(0,140)}{nValue.replace(/<\/?[^>]+(>|$)/g, "").length > 140 ? '...' : ''}</p>
      </div>
      <p onClick={handleDeleteNote} className="note-card-close"><i className="fas fa-times"></i></p>
    </div>
  );
};

export default NoteCard;
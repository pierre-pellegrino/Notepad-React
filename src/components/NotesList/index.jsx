import React from 'react';
import NoteCard from '../NoteCard';

const NotesList = ({onDeleteNote, onLoadNote}) => {

  let arr = [];
  for (let i =0; i<localStorage.length;i++){
    arr.push({key: localStorage.key(i), value: localStorage.getItem(localStorage.key(i))});
  }

  return (
    <div className="notes-list-wrapper">
      {arr.map((note, i) => {
        return <NoteCard nKey={note.key} nValue={note.value} index={i} key={i} onDeleteNote={onDeleteNote} onLoadNote={onLoadNote}/>
      })}
    </div>
  );
};

export default NotesList;
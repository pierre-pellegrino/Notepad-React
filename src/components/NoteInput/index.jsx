import React from 'react';
import './noteinput.scss';

const NoteInput = ({onChangeTitle, onChangeContent, onNewNote}) => {
  const [markdownContent, setmarkdownContent] = React.useState("");
  const [titleContent, setTitleContent] = React.useState("");

  const handleTitleInput = (e) => {
    setTitleContent(e.target.value);
    onChangeTitle(e.target.value);
  }

  const handleContentInput = (e) => {
    let showdown = require('showdown'),
    converted = new showdown.Converter(),
    text = e.target.value,
    html = converted.makeHtml(text);
    setmarkdownContent(html);
    onChangeContent(html);
  }

  const handleSaveClick = (e) => {
    if (titleContent.trim() === "") {
      document.querySelector('.empty-title').classList.add('active');
    }
    else {
      document.querySelector('.empty-title').classList.remove('active');
      localStorage.setItem(titleContent, markdownContent);
      onNewNote(1);
    }
  }

  return (
    <>
      <div className="inputs-wrapper">
        <p className="empty-title">Merci de choisir un titre</p>
        <input type="text" id="title-input" onChange={handleTitleInput} placeholder="Titre de votre note"></input>
        <textarea id="text-input" onChange={handleContentInput} placeholder="Contenu de votre note"></textarea>
        <button className="save-btn btn" onClick={handleSaveClick}>Enregistrer</button>
      </div>
    </>
  );
};

export default NoteInput;
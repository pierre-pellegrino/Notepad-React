import React, { useEffect } from 'react';
import './noteinput.scss';

const NoteInput = ({onChangeTitle, onChangeContent, onNewNote, noteIndex, onNoteIndex}) => {
  const [markdownContent, setmarkdownContent] = React.useState("");
  const [titleContent, setTitleContent] = React.useState("");

  const handleTitleInput = (e, value=null) => {
    if (!value) {
      setTitleContent(e.target.value);
      onChangeTitle(e.target.value);
    }
    else {
      setTitleContent(value);
      onChangeTitle(value);
    }
  }

  const handleContentInput = (e, value=null) => {
    if (!value) {
      let showdown = require('showdown'),
      converted = new showdown.Converter(),
      text = e.target.value,
      html = converted.makeHtml(text);
      setmarkdownContent(html);
      onChangeContent(html);
    }
    else {
      let showdown = require('showdown'),
      converted = new showdown.Converter(),
      text = value,
      html = converted.makeHtml(text);
      onChangeContent(html);
    }

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

  const htmlToMarkdown = (htmlText) => {
    var showdown  = require('showdown'),
    converter = new showdown.Converter(),
    html      = htmlText,
    text      = converter.makeMarkdown(html);
    return text;
  }
  
  useEffect(() => {
    document.getElementById('title-input').focus();
  }, []);

  if (noteIndex < 0) {
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
  }
  else {
    onChangeContent(localStorage.getItem(localStorage.key(noteIndex)));
    onChangeTitle(localStorage.key(noteIndex));
    onNoteIndex(-1);
    return (
      <>
        <div className="inputs-wrapper">
          <p className="empty-title">Merci de choisir un titre</p>
          <input type="text" id="title-input" onChange={handleTitleInput} value={localStorage.key(noteIndex)}></input>
          <textarea id="text-input" onChange={handleContentInput} value={htmlToMarkdown(localStorage.getItem(localStorage.key(noteIndex)))}></textarea>
          <button className="save-btn btn" onClick={handleSaveClick}>Enregistrer</button>
        </div>
      </>
    );
  }
  
};

export default NoteInput;
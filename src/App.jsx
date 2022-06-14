import React, { Component, useState }  from 'react';
import './App.css';
import EmojiBar from './components/EmojiBar' 

import Picker from 'emoji-picker-react';
function App() {
  
  const [emojis, setEmojis] = useState("")
  return (
    <div className="App">
      <header className="App-header">
      <EmojiBar emojis={emojis}/>
      <Picker onEmojiClick={function(event,emojiObject) {setEmojis(emojis.concat(emojiObject.emoji))}} pickerStyle={{ width: '100%' }} />


      <button type="button" onClick= {function() {setEmojis(emojis.slice(0,emojis.length-1))}}>delete</button>

      <button type="button" onClick= {function() {setEmojis()}}>create your yyyyat!</button>
      </header>
    </div>
  );
}

export default App;
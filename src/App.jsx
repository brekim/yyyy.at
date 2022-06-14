import React, { Component, useState }  from 'react';
import './App.css';
import EmojiBar from './components/EmojiBar' 

import Picker from 'emoji-picker-react';
function App() {
  // TODO: not perfect but works for now
  // https://stackoverflow.com/questions/1282726/get-subdomain-and-load-it-to-url-with-greasemonkey
  let full = window.location.host
  let subdomain = full.split('.')[0]

  const [emojis, setEmojis] = useState("")
  return (
    <div className="App">
      <header className="App-header">
      <p>{`${subdomain}`}</p>
      
      <EmojiBar emojis={emojis}/>
      <Picker onEmojiClick={function(event,emojiObject) {setEmojis(emojis.concat(emojiObject.emoji))}} pickerStyle={{ width: '100%' }} />

      <button type="button" onClick= {function() {setEmojis(emojis.slice(0,emojis.length-1))}}>delete</button>

      <button type="button" onClick= {function() {setEmojis()}}>create your yyyyat!</button>
      </header>
    </div>
  );
}

export default App;
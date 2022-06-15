import React, { useState, useEffect }  from 'react'
import Picker from 'emoji-picker-react'
import './App.css'
import EmojiBar from './components/EmojiBar'
import CreateRedirect from './components/CreateRedirect'
import TryRedirect from './components/TryRedirect'

function App() {
  // TODO: not perfect but works for now
  // https://stackoverflow.com/questions/1282726/get-subdomain-and-load-it-to-url-with-greasemonkey
  let full = window.location.host  
  useEffect(() => {
    TryRedirect(full);
  })

  const [emojis, setEmojis] = useState("")
  return (
    <div className="App">
      <header className="App-header">
      
      <EmojiBar emojis={emojis}/>
      <Picker onEmojiClick={function(event,emojiObject) {
        setEmojis(emojis.concat(emojiObject.emoji))
      }} pickerStyle={{ width: '100%' }} />

      <button type="button" onClick={() => {
        setEmojis(emojis.slice(0,emojis.length - 2))
      }}>delete</button>

      <CreateRedirect emojis={emojis}/>
      </header>
    </div>
  );
}

export default App;
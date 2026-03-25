import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import './Entry.css'
import Entry from './Entry'
import emojipedia from '../emojipedia'
import React from "react";


function createEntry(emojiTerm){
  return <Entry
  key= {emojiTerm.id}
  emoji = {emojiTerm.emoji}
  name ={emojiTerm.name}
  description ={emojiTerm.meaning}
  />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className = "dictionary">
        {emojipedia.map(createEntry)}
      </dl>

      
    </div>
  );
}

export default App;

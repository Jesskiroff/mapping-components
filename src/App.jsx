import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import './Entry.css'
import Entry from './Entry'

import React from "react";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <d1 className = "dictionary">
        <Entry/>
        <Entry/>
        <Entry/>
      </d1>

      
    </div>
  );
}

export default App;

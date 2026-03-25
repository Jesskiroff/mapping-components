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
      <dl className = "dictionary">
        <Entry
        emoji = "💪"
        name = "Tense Biceps"
        description = "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
        />
        {/* <Entry/>
        <Entry/> */}
      </dl>

      
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Video from './components/Video';
import ItemEvent from './components/ItemEvent';




function App() {
  const [time, setTime] = useState<number>(0);
  
  const heandlerChange = (time:number) => {
    setTime(time)
  };

  return (
    <div className="App">
      <Video onChange={heandlerChange}/>
      <ItemEvent time={time}/> 
    </div>
  );
}

export default App;

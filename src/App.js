import './App.css';
import {useState} from 'react'
import {useToggle} from "./useToggle";

function App() {
  const {state: isVisible, toggle} = useToggle()

  return (
    <div className="App">
      <button onClick={toggle}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <h1>Hidden text</h1>}
    </div>
  );
}

export default App;

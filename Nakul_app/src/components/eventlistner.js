import logo from './logo.svg';
import Header from './components/header'
import CounterComponent from './components/counterComponent'
import Screener from './components/screener';

import './App.css';

function App() {
  
  function handleEvent(event) {
   console.log(event)
  }

  function handleSpanClick(event) {
    console.log(event)
  }

  return (
    <div className="App">
     <ButtonComponent onEvent={handleEvent} onChildClick={handleSpanClick} />
    </div>
  );
}

export default App
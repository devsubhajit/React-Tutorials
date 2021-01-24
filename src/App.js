import React from 'react';
import './App.css';


// import Greetings from './screen/Greetings';
import StateLess from './screen/FuntionalComp/StatelessOne';
import Events from './screen/Events';


function App() {
  return (
    <div className="App">
      <Events myvalue={"John"}  myobj={{id:1, value:20}}>
        <p>This is my paragraph</p>
      </Events>
      <StateLess />
    </div>
  );
}

export default App;

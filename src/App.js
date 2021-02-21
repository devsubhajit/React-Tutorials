import React from 'react';
import './App.css';


// import Greetings from './screen/Greetings';
import StateLess from './screen/FuntionalComp/StatelessOne';
import Events from './screen/Events';
import Forms from './screen/Form/Form';
import Loginform from './screen/Sukti/login';


function App() {
  return (
    <div className="App">
      {/* <Events myvalue={"John"}  myobj={{id:1, value:20}}>
        <p>This is my paragraph</p>
      </Events>
      <StateLess /> */}
      {/* <Forms /> */}
      <Loginform />
    </div>
  );
}

export default App;

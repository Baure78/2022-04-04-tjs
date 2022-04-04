import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './App/components/Button/Button';

function App() {
  return (
    <div className="App">
      Hello world
      <Button text="Text du button" bgColor="green" myClick={(arg: any) => {console.log('ok')}}/>
      <Button text="Second button"/>
      <Button text="Troisieme button"/>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test';

function App() {
  return (
    <div>
        <Test
            message="Google"
        />
        <Test message="This is component 2"/>
        <Test message="This is component 3"/>
        <Test message="This is component 4"/>
        <Test message="This is component 5"/>
        <Test message="Hello World"/>
    </div>
  );
}

export default App;

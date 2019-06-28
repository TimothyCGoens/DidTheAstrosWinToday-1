import React from 'react';
import logo from './logo.svg';
import TodaysScore from './components/TodaysScore'
import './App.css';

function App() {
  return (
    <div>
    <h1 className='DTAWT'> Did the Astro's Win Today? </h1>
    <TodaysScore />
    </div>
  );
}

export default App;

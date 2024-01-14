import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import SearchBox from './searchBox';
import WeatherBox from './weatherbox';
import WeatherApp from './weatherApp';


// Use npm run dev to run this file

function App() {
  function send(){
    console.log("message was send")
  }
  return (
    <>
    <WeatherApp></WeatherApp>
    </>
  )
}

export default App

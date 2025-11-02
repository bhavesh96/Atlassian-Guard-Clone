import { useState } from 'react'
import Home from './pages/home'
import './index.css'
import {BrowserRouter} from 'react-router-dom'

function App() {

  return (
    <div className='flex flex-col items-center '>
      <BrowserRouter>
      <Home />
      </BrowserRouter>
    </div>
  )
}

export default App

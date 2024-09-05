import { useState } from 'react'
import './App.css'
import RandomImage from './components/RandomImage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RandomImage />
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  //    var, function/method

  // State ->
  // const addClick = () => {
  //   setCounter(counter + 1)
  // }

  // Batching ->
  const addClick = () => {
    // method((previousCount) => (previousCount + 1))
    setCounter((counter) => (counter + 1))
    setCounter((counter) => (counter + 1))
  }

  //  State ->
  // const removeClick = () => {
  //   setCounter(counter - 1)
  // }

  // Batching ->
  const removeClick = () => {
    // method((previousCount) => (previousCount - 1))
    setCounter((counter) => (counter - 1))
    setCounter((counter) => (counter - 1))
  }
  return (
    <>
      <h1>Count the clicks {counter}</h1>
      <h2>Clicks: {counter}</h2>
      <button
        onClick={addClick}>
        Add clicks
      </button>
      <button
        onClick={removeClick}>
        Remove clicks
      </button>
    </>
  )
}

export default App

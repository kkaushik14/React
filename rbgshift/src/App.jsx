import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  const [animate, setAnimate] = useState(false)

  const handleClick = (newColor) => {
    setAnimate(false)
    void setTimeout(() => {
      setColor(newColor)
      setAnimate(true)
    }, 10)
  }

  return (
    <div
      className={`w-full h-screen duration-200 ${animate ? 'animate-shifter' : ''}`}
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-gradient-to-r from-violet-700 via-lime-300 to-violet-700 px-3 py-2 rounded-3xl'>
          <button 
            onClick={() => handleClick('red')} 
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-red-600'>
            Red
          </button>
          <button 
            onClick={() => handleClick('green')} 
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-green-500'>
            Green
          </button>
          <button 
            onClick={() => handleClick('blue')} 
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-blue-600'>
            Blue
          </button>
          <button 
            onClick={() => handleClick('orange')} 
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-orange-600'>
            Orange
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

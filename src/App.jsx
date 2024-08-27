import { useState } from 'react';
import './App.css'

function App() {
  const [advice, setAdvice] = useState('GET YOUR ADVICE')

  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()
    setAdvice(data?.slip?.advice)
  }

  function clearAdvice() {
    setAdvice('GET YOUR ADVICE')
  }

  return (
    <>
      <div className='flex flex-col justify-center gap-y-5 h-screen items-center px-4 sm:px-8 md:px-12 lg:px-16 || relative group'>
        <h2 className='font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase text-center'>
          "{advice}"
        </h2>
        <button
          onClick={getAdvice}
          className='text-black bg-white p-2 sm:p-3 md:p-4 lg:p-5 hover:font-semibold uppercase border border-y-8 border-x-8 border-l-red-500 border-t-black border-b-green-500 border-r-white'
        >
          Click here for the advice
        </button>
        <button
          onClick={clearAdvice}
          className='text-black p-2 sm:p-3 md:p-4 lg:p-5 font-mono uppercase border border-black'
        >
          Clear
        </button>
      </div>
    </>
  )
}

export default App

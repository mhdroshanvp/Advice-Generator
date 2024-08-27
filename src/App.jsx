import { useState } from 'react';
import './App.css'

function App() {
  const [advice, setAdvice] = useState('GET YOUR ADVICE');

  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data?.slip?.advice);
  }

  function clearAdvice() {
    setAdvice('GET YOUR ADVICE');
  }

  function copyAdvice() {
    navigator.clipboard.writeText(advice).then(() => {
      alert('Advice copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy the text: ', err);
    });
  }

  return (
    <>
      <div className='flex justify-center items-center h-screen px-4 sm:px-8 md:px-12 lg:px-16'>
        <div className='w-full max-w-[600px] h-auto flex flex-col justify-center gap-5 items-center p-6 sm:p-8 md:p-10 lg:p-12 bg-black bg-opacity-15 rounded-lg'>
          <h2 className='font-bold text-black text-xl sm:text-1xl md:text-2xl lg:text-3xl uppercase text-center'>
            "{advice}"
          </h2>
          <button 
            onClick={getAdvice} 
            className='text-black bg-white p-1 sm:p-1 md:p-2 lg:p-3 hover:font-semibold uppercase border border-y-8 border-x-8 border-l-red-500 border-t-black border-b-green-500 border-r-white'>
            Click here for the advice
          </button>
          <div className='flex flex-row gap-4 flex-wrap justify-center'>
            <button onClick={copyAdvice} className='text-black p-1 sm:p-1 md:p-2 lg:p-3 font-mono uppercase border border-black'>
              Copy Advice
            </button>
            <button 
              onClick={clearAdvice} 
              className='text-black p-1 sm:p-1 md:p-2 lg:p-3 font-mono uppercase border border-black'>
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

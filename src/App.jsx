import { useState } from 'react'
import './App.css'

function App() {

  const [color,setColor] = useState('olive')

 return (
  <div className="w-full h-screen duration-200"
  style={{backgroundColor: color}}
  >      

  <div className='fixed flex flex-wrap gap-10 justify-center bottom-12 inset-x-0 px-2'>
    <div className='"flex flex-wrap justify-center gap-10 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "red"}}
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1498748624.
        onClick={() => {setColor('red')}}>
          Red
        </button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "blue"}}
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1498748624.
        onClick={() => {setColor('blue')}}>
          blue
        </button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "Yellow"}}
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1498748624.
        onClick={() => {setColor('Yellow')}}>
          Yellow
        </button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "Navy"}}
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1498748624.
        onClick={() => {setColor('Navy')}}>
          Navy
        </button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "pink"}}
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1498748624.
        onClick={() => {setColor('Pink')}}>
          Pink
        </button>
    </div>
  </div>
</div>
  )
}

export default App

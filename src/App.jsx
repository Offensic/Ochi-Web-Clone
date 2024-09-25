import { useState } from 'react'
import './App.css'
import Homepage from './Pages/Homepage'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  // const [count, setCount] = useState(0)
  
  return (
    <>
      <div>

        <Homepage/>

      </div>
    </>
  )
}

export default App

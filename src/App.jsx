import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import First from './Pages/Second'
import Second from './Pages/Second'
import Third from './Pages/Third'
import Four from './Pages/Four'
import Footer from './Components/Footer'
import Five from './Pages/Five'
import { SiX } from 'react-icons/si'
import Six from './Pages/Six'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Nav />
        <Home />
        <Second />
        <Third />
        <Four />
        
        <Five />
         <Footer /> 
       {/* <Six /> */}
       </div>
    </>
  )
}

export default App

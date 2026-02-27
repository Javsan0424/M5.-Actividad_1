import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>

      <div className='flex '>
        <div><Sidebar></Sidebar></div>
        
        <Content></Content>
      </div>
      
      <Footer></Footer>



  

    </div>
  )
}

export default App

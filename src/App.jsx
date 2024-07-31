import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Footer } from './Components/Footer'
import {GetDetails} from './context/loginData'

function App() {

  return (
    <GetDetails>
    <div className="flipartContainer">
    <Navbar/>
     <Outlet/>
     <Footer/>
     </div>
    </GetDetails>
  )
}

export default App

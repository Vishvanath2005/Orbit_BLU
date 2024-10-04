import './App.css'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "../src/pages/layout/Sidebar"

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Sidebar/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

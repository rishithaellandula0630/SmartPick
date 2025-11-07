import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Samsung from './Pages/Samsung'
import Oneplus from './Pages/Oneplus'
import Realme from './Pages/Realme'
import Redmi from './Pages/Redmi'
function App() {
    return(
        <>
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Samsung />}/>
                <Route path="/one" element={<Oneplus />}/>
                <Route path="/red" element={<Redmi />}/>
                <Route path="/real" element={<Realme />}/>
            </Routes>
            </BrowserRouter>
        </div>
        </>
    )
}

export default App

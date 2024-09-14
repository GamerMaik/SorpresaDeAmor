import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Home , Galery, Promesas} from "./Components";
import './Styles/GeneralStyle.css'
export function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/galery' element={<Galery/>}/>
          <Route path='/promesas' element={<Promesas/>}/>
        </Routes>
      </BrowserRouter>
  )
}

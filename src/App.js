import './App.css';
import {BrowserRouter, Route, Routes, Redirect} from 'react-router-dom'

import NoteBoard from './components/NoteBoard'

export default function App() {
  return (
    <div className='bg-gradient-to-r from-zinc-400 via-stone-400  to-zinc-400
         min-w-full h-screen'>
      <NoteBoard />
    </div>
  );}




//    <BrowserRouter>
//<Routes>  
//<Route exact path="/" element={<HeroSection1/>} />
//<Route path="/price" element={<PriceCardSection1/>} />
//<Route path="/map" element={<Mappa/>} />
//<Route path="/mail" element={<FeedbackForm/>} />
//</Routes>
//</BrowserRouter>
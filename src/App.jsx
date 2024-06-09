import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './components/Main'
import Blog from './components/Blog'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes >
      <Route path='/' element={<Main />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/about' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

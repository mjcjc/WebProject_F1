import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Gallery from './pages/Gallery/Gallery';
import List from './pages/List/List';
import Apply from './pages/Apply/Apply';
import FAQ from './pages/FAQ/FAQ';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      {/*
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/gallery" style={{ marginRight: '10px' }}>Gallery</Link>
        <Link to="/list" style={{ marginRight: '10px' }}>List</Link>
        <Link to="/apply" style={{ marginRight: '10px' }}>Apply</Link>
        <Link to="/faq">FAQ</Link>
      </nav>*/}
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/list" element={<List />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/" element={<Gallery />} />
      </Routes>
    </Router>
  )
}

export default App

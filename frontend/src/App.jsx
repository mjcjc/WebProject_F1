import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Gallery from './pages/Gallery/Gallery';
import List from './pages/List/List';
import Apply from './pages/Apply/Apply';
import FAQ from './pages/FAQ/FAQ';
import './App.css'
import Billboard from './components/Billboard/Billboard';
function App() {
  return (
    <Router>
      <>
          <Routes>
            <Route path="/gallery" element={
              <div className='page-container'>
                <Billboard />
                <Header />
                <Gallery />
              </div>
            } />
            <Route path="/list" element={<List />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/" element={
              <>
                <Billboard />
                <Header />
                <Gallery />
              </>
            } />
          </Routes>
        <Footer />
      </>
    </Router>
  )
}

export default App

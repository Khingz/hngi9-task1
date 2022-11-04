import React from 'react';
import ProfileHome from './Pages/Profile_Home';
import Footer from './component/footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import ScrollToTop from './component/scrolTop';
import Contact from './Pages/Contact';

function App() {
  return (
     <div className="App">
      <Router>
        <ScrollToTop>
          <Routes>
              <Route path='/' element={<ProfileHome />} />
              <Route path='/contact' element={<Contact />} />
          </Routes>
        </ScrollToTop>
      </Router>
      <Footer /> 
     </div>
  );
}

export default App;

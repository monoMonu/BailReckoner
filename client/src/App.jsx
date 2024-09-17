import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BailApplication from './components/BailApplication';
import OffenceList from './components/OffenceList';

function App() {
   return (
      <Router>
         <div className="App">
            <Navbar />
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route path="/bail-application" element={<BailApplication />} />
               <Route path="/offences" element={<OffenceList />} />
            </Routes>
         </div>
      </Router>
   );
}

export default App;

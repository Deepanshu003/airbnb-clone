import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
    <Routes>
    <Route path='/search' element={<SearchPage/>} />
    <Route path='/' element={<Home />} />
    </Routes>
    </Router>
    <Footer />
    </div>
  );
}

export default App;

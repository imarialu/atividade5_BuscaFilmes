import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import Detalhes from './pages/Detalhes';
import Menu from './components/Menu';
import './App.css'

function App() {
  return (
    <Router>
      <Menu/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/favoritos' element={<Favoritos />}></Route>
          <Route path='/detalhes/:id' element={<Detalhes />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
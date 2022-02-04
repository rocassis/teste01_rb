import React from 'react';
// import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from '../components/views';
import Home from './views/home';
import About from './views/about';
import Cadastro from './views/cadastro';

  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/cadastro' component={Cadastro} />
      </Routes>
    </Router>
  );
}

export default App;
  
import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

const App = () => {
  return (
  
    <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="contain">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Catálogo</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dados">Novo</Link>
          </li>
        </ul>
      </div>
    </nav>
      <div className="container mt-4">
      <Routes>
          <Route path="/" element={<LivroLista />} />
          <Route path="/dados" element={<LivroDados />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

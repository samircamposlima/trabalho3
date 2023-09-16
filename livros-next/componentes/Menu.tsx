import React from 'react';
import Link from 'next/link';

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <div className="container">
        <a href="/" className="navbar-brand">
          Home
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/LivroLista" className="nav-link">
               Catálogo
              </a>
            </li>
            <li className="nav-item">
              <a href="/LivroDados" className="nav-link">
                Novo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

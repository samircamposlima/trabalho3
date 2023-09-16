// components/Menu.tsx
import React from 'react';
import Link from 'next/link';

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-nav">
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
          <Link href="/LivroLista">
            <a className="nav-link">LivroLista</a>
          </Link>
          <Link href="/LivroDados">
            <a className="nav-link">LivroDados</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

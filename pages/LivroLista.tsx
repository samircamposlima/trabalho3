// pages/LivroLista.tsx
import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { LinhaLivro } from '../classes/componentes/LinhaLivro';
import { Livro } from '../classes/modelo/Livro';
import { ControleLivro } from '../classes/controle/ControleLivros';
import { Menu } from '../classes/componentes/Menu';
import styles from '../styles/Home.module.css';

const baseURL = 'http://localhost:3000/api/livros';
const controleLivro = new ControleLivro();

const LivroLista: NextPage = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const response = await fetch(baseURL);
        const data = await response.json();
        setLivros(data);
        setCarregado(true);
      } catch (error) {
        console.error('Erro ao obter livros', error);
      }
    };

    fetchLivros();
  }, [carregado]);

  const excluir = async (codigo: number) => {
    try {
      await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
      setCarregado(false);
    } catch (error) {
      console.error('Erro ao excluir livro', error);
    }
  };

  return (
    <div className={styles.container}>
      <Menu />
      <main>
        <h1>Lista de Livros</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Título</th>
              <th>Resumo</th>
              <th>Editora</th>
              <th>Autores</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <LinhaLivro key={livro.codigo} livro={livro} excluir={() => excluir(livro.codigo)} />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;

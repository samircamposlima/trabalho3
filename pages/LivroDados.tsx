// pages/LivroDados.tsx
import type { NextPage } from 'next';
import React, { useState } from 'react';
import { ControleEditora } from '../classes/controle/ControleEditora';
import { Livro } from '../classes/modelo/Livro';
import styles from '../styles/Home.module.css';
import { Menu } from '../classes/componentes/Menu';
import { useRouter } from 'next/router';

const controleEditora = new ControleEditora();
const baseURL = 'http://localhost:3000/api/livros';

const LivroDados: NextPage = () => {
  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora.toString(),
    text: editora.nome,
  }));

  const [título, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(0);

  const navigate = useRouter().push;

  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const novoLivro: Livro = {
        codigo: 0,
        codEditora,
        título,
        resumo,
        autores: autores.split('\n'),
      };

      await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoLivro),
      });

      navigate('/LivroLista');
    } catch (error) {
      console.error('Erro ao incluir livro', error);
    }
  };

  return (
    <div className={styles.container}>
      <Menu />
      <main>
        <h1>Inclusão de Livro</h1>
        <form onSubmit={incluir}>
          <div className="mb-3">
            <label htmlFor="titulo" className="form-label">
              Título
            </label>
            <input type="text" className="form-control" id="titulo" value={título} onChange={(e) => setTitulo(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="resumo" className="form-label">
              Resumo
            </label>
            <textarea className="form-control" id="resumo" rows={3} value={resumo} onChange={(e) => setResumo(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="autores" className="form-label">
              Autores (um por linha)
            </label>
            <textarea className="form-control" id="autores" rows={3} value={autores} onChange={(e) => setAutores(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="codEditora" className="form-label">
              Editora
            </label>
            <select className="form-select" id="codEditora" value={codEditora} onChange={tratarCombo} required>
              {opcoes.map((opcao) => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Incluir
          </button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;

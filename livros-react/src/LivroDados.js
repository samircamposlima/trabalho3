import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ControleLivro} from './controle/ControleLivros';
import {ControleEditora} from './controle/ControleEditora';

const LivroDados = () => {
  const controleLivro = new ControleLivro();
  const controleEditora = new ControleEditora();

  const opcoes = controleEditora.getEditoras().map(editora => ({
    value: editora.codEditora,
    text: editora.nome
  }));

  const [título, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const navigate = useNavigate();

  const tratarCombo = (event) => {
    const { value } = event.target;
    setCodEditora(Number(value));
  };

  const incluir = (event) => {
    event.preventDefault();

    const livro = {
      codigo: 0,
      título,
      resumo,
      autores: autores.split('\n'),
      codEditora
    };

    controleLivro.incluir(livro);
    navigate('/');
  };

  return (
    <main>
      <h1>Dados do Livro</h1>
      <form onSubmit={incluir}>
        <div className="form-group">
          <label>Título</label>
          <input type="text" value={título} onChange={(e) => setTitulo(e.target.value)} className="form-control mb-3" required />
        </div>
        <div className="form-group">
          <label>Resumo</label>
          <textarea value={resumo} onChange={(e) => setResumo(e.target.value)} className="form-control mb-3" required />
        </div>
        <div className="form-group">
          <label>Editora</label>
          <select style={{appearance:"auto"}} value={codEditora} onChange={tratarCombo} className="form-control mb-3">
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Autores (1 por linha)</label>
          <textarea value={autores} onChange={(e) => setAutores(e.target.value)} className="form-control mb-3" required />
        </div>
        
        <button type="submit" className="btn btn-primary">Salvar Dados</button>
      </form>
    </main>
  );
};

export default LivroDados;

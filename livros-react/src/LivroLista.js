import React, { useState, useEffect } from 'react';
import { ControleLivro } from '../src/controle/ControleLivros';
import { ControleEditora } from  '../src/controle/ControleEditora';
import 'bootstrap/dist/css/bootstrap.min.css';
import'./index.css';


const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

const LinhaLivro = ({ livro, excluir }) => {
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>{livro.título}<br></br><button className="btn btn-danger" onClick={() => excluir(livro.codigo)}>Excluir</button></td>
      <td className="col-7">{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const obterLivros = async () => {
      const livros = controleLivro.obterLivros();
      setLivros(livros);
      setCarregado(true);
    };

    obterLivros();
  }, [carregado]);

  const excluir = (codigoLivro) => {
    controleLivro.excluir(codigoLivro);
    setCarregado(false);
  };

  return (
    <main >
      <h1>Catálogo de Livros</h1>
      <table className="table  table-striped ">
        <thead >
          <tr>
            <th  style={{color:"white",backgroundColor:"black"}}>Título</th>
            <th style={{color:"white",backgroundColor:"black"}}>Resumo</th>
            <th style={{color:"white",backgroundColor:"black"}}>Editora</th>
            <th style={{color:"white",backgroundColor:"black"}}>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;

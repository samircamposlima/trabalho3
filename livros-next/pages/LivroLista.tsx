import { LinhaLivro } from './LinhaLivro'; 
import { ControleLivro } from '../classes/controle/ControleLivros';
import { Livro } from '../classes/modelo/Livro';
import { Menu } from '../componentes/Menu';
import styles from '../styles/Home.module.css';

import { useState } from 'react';

const controleLivro = new ControleLivro();

const LivroLista: React.FC = () => {
  const [livros, setLivros] = useState<Livro[]>(controleLivro.obterLivros());

  const excluirLivro = (codigo: number) => {
    controleLivro.excluir(codigo);
    setLivros((livros) => livros.filter((livro) => livro.codigo !== codigo));
  };

  return (
    
    <div >
      <Menu />
      <h2>Lista de Livros</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Título</th>
            <th>Editora</th>
            <th>Autores</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={() => excluirLivro(livro.codigo)} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LivroLista;

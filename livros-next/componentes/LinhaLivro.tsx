import React from 'react';
import {Livro} from '../classes/modelo/Livro'


interface LinhaLivroProps {
  livro: Livro;
  excluir: () => void;
}

const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const { livro, excluir } = props;

 

  return (
    <div>
      
      <p>Título: {livro.título}</p>
      <p>Autor: {livro.autores}</p>
   
     
      <button onClick={excluir}>Excluir</button>
    </div>
  );
}

export default LinhaLivro;
// pages/api/livros/[codigo].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivro } from '../../../classes/controle/ControleLivros';

const controleLivro = new ControleLivro();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'DELETE') {
      const { codigo } = req.query;
      controleLivro.excluir(Number(codigo));
      res.status(200).json({ message: 'Livro excluído com sucesso!' });
    } else if (req.method === 'POST') {
      // Lógica para inclusão de um novo livro
      const data = JSON.parse(req.body);

      // Manipule os dados como desejar, por exemplo, salvar em uma lista de livros
      // e retornar os dados salvos
      const novoLivro = {
        codigo: Math.random(), // Um exemplo de geração de um código aleatório
        ...data,
      };

      // Substitua esta parte pela lógica de armazenamento em banco de dados
      const livrosSalvos = [novoLivro]; // Substitua por seu mecanismo de armazenamento

      res.status(201).json({ message: 'Livro incluído com sucesso', livro: novoLivro });
    } else {
      res.status(405).end();
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor' });
  }
};
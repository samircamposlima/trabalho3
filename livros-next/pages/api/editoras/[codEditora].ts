// pages/api/editoras/[codEditora].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { ControleEditora } from '../../../classes/controle/ControleEditora';


const controleEditora = new ControleEditora();
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const codEditora = Number(req.query.codEditora);

      if (isNaN(codEditora)) {
        res.status(400).json({ error: 'Código de editora inválido' });
        return;
      }

      const nomeEditora =  controleEditora.getNomeEditora(codEditora);

      if (!nomeEditora) {
        res.status(404).json({ error: 'Editora não encontrada' });
        return;
      }

      res.status(200).json({ nome: nomeEditora });
    } else {
      res.status(405).end();
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

 


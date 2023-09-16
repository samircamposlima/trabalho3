import { Editora } from '../modelo/Editora';

const editoras: Editora[] = [
  new Editora(1, 'Alta Books'),
  new Editora(2, 'Pearson'),
  new Editora(3, 'Addison Wesley'),
  new Editora(4,'Pearson')
];

export class ControleEditora {
  
  getNomeEditora(codEditora: number): string {
    const editora = editoras.find((e) => e.codEditora === codEditora);
    return editora ? editora.nome : '';
  }

  getEditoras(): Editora[] {
    return editoras;
  }
}

export default ControleEditora;

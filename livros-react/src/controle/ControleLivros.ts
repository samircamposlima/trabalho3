import { Livro } from '../modelo/Livro';

const livros: Livro[] = [
  new Livro(1, 1, 'Use a Cabeça: Java', 'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.Resumo Livro 1', ['Bert Bates', 'Kathy Sierra']),
  new Livro(2, 2, 'Java, como Programar', 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel', ['Paul Deitel','Harvey Deitel']),
  new Livro(3, 3, 'Core Java for the Impatient', "eaders familiar with Horstmann's original, two-volume 'Core Java' books who are looking for a comprehensive, but condensed guide to all of the new features and functions of Java SE 9 will learn how these new features impact the language and core libraries.", ['Cay Horstmann']),
];

export class ControleLivro {
  obterLivros(): Livro[] {
    return livros;
  }

  incluir(livro: Livro): void {
    const codigoMaisAlto = Math.max(...livros.map((l) => l.codigo));
    livro.codigo = codigoMaisAlto + 1;
    livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = livros.findIndex((l) => l.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}
export default ControleLivro;

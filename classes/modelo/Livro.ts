// Arquivo Livro.ts
export class Livro {
    constructor(
      public codigo: number,
      public codEditora: number,
      public título: string,
      public resumo: string,
      public autores: string[]
    ) {}
  }

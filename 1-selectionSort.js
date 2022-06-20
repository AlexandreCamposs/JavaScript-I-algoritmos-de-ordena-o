// SelectionSort ordenação por seleção.
const livros = require("./1-Algoritmos/2-ListaLivros");
const menorValor = require("./1-Algoritmos/2.1-ListaLivos");

for (let atual = 0; atual < livros.length -1; atual++) {
  let menor = menorValor(livros, atual);
  let livroAtual = livros[atual];
  console.log("posição atual", atual);
  console.log("livros atual", livros[atual]);
  let livroMenorPreco = livros[menor];
  console.log("livro menor preço", livros[menor]);

  livros[atual] = livroMenorPreco;
  livros[menor] = livroAtual;

}
console.log(livros)
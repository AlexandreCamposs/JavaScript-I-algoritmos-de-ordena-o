const livros = [
    { livro: "JavaScript", preco: 25 },
    { livro: "PHP", preco: 15 },
    { livro: "Java", preco: 30 },
    { livro: "Elixir", preco: 50 },
    { livro: "Go", preco: 45 },
    { livro: "Python", preco: 20 },
  ];

function insertionSort(lista) {
    for(let atual =0; atual < lista.length; atual++) {
        let analise = atual;
        while(analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            let itemAnalise = lista[analise];
            let itemAnterior = lista[analise - 1];

            lista[analise] = itemAnterior
            lista[analise -1] = itemAnalise

            analise --
        }
    }
    console.log(lista)
}

insertionSort(livros)
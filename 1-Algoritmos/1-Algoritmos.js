                    //0  //1
const precosLivros = [25, 15, 30, 50, 45, 20];

let maisBarato = 0

for( atual = 0; atual < precosLivros.length; atual++) {
    if(precosLivros[atual] < precosLivros[maisBarato]) {
        maisBarato = atual
    }
}
console.log(`O preço do livro mais barato é ${precosLivros[maisBarato]}`)

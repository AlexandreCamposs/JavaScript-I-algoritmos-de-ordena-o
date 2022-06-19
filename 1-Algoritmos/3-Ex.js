const carros = [
  { nome: "Uno", preco: 17000 },
  { nome: "Ferrari", preco: 500000 },
  {nome:"Fusca",preco:15000},
  {nome:"Toyota", preco:75000}
];
let maisCaro = 0;

for(let atual=0; atual < carros.length; atual++) {
    if(carros[atual].preco > carros[maisCaro].preco) {
        maisCaro = atual
    }
}
console.log(`Carro mais carro é ${carros[maisCaro].nome}`)
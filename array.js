/* let frutas = ["maça", "banana", "abacaxi", "laranja", "morango"]

console.log(frutas[frutas.length - 1]) */

let filmes = ["velozes e furiosos", "marley e eu", "eu sou a lenda", "homem aranha", "os vingadores"]

filmes[1] = "Coringa" /* alterar valor no indice */

filmes.push("coringa 2")/* add no final */
filmes.unshift("Homem de ferro") /* add no começo */
filmes.pop() /* remove o ultimo indice do arrey */
filmes.shift() /* romove o primeiro indice do arrey */
/* console.log(filmes[0])
console.log(filmes[1])
console.log(filmes[2])
console.log(filmes[3])
console.log(filmes[4]) */

for(const filme of filmes) {
    console.log(filmes)
}


/* for(let i = 0; i < filmes.length; i++) {
    console.log(filmes[i])
    
} */
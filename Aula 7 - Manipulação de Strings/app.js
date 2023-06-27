let frase = "Aprendendo JavaScript é divertido!";

// Obtendo o comprimento da frase
let comprimento = frase.length;
console.log("Comprimento da frase:", comprimento);
// ->Comprimento da frase: 34

// Convertendo para letras maiúsculas
let maiusculas = frase.toUpperCase();
console.log("Frase em letras maiúsculas:", maiusculas);
// ->Frase em letras maiúsculas: APRENDENDO JAVASCRIPT É DIVERTIDO!

// Substituindo parte da frase
let novaFrase = frase.replace("divertido", "incrível");
console.log("Nova frase:", novaFrase);
// -> Nova frase: Aprendendo JavaScript é incrível!

// Neste exemplo, utilizamos algumas operações de manipulação de strings. Primeiro, obtemos o comprimento da frase utilizando a propriedade length. Em seguida, usamos o método toUpperCase() para converter a frase para letras maiúsculas. Por fim, utilizamos o método replace() para substituir parte da frase por outra palavra.
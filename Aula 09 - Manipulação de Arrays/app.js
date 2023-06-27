let numeros = [1, 2, 3, 4, 5];

// Adicionando elementos no final do array
numeros.push(6);
console.log("Array após adicionar elemento:", numeros);

// Removendo o último elemento do array
numeros.pop();
console.log("Array após remover elemento:", numeros);

// Obtendo o índice de um elemento no array
let indice = numeros.indexOf(3);
console.log("Índice do elemento 3:", indice);

// Obtendo um subarray
let subarray = numeros.slice(2, 4);
console.log("Subarray:", subarray);

// Neste exemplo, demonstramos algumas operações comuns de manipulação de arrays. Utilizamos o método push() para adicionar um elemento no final do array, o método pop() para remover o último elemento do array, o método indexOf() para obter o índice de um elemento no array e o método slice() para obter um subarray a partir do array original.
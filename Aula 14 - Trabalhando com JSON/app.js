// JSON em formato de string
let jsonStr = '{"nome": "João", "idade": 30, "profissao": "Engenheiro"}';

// Convertendo JSON para um objeto JavaScript
let pessoa = JSON.parse(jsonStr);

// Acessando as propriedades do objeto
console.log("Nome:", pessoa.nome);
console.log("Idade:", pessoa.idade);
console.log("Profissão:", pessoa.profissao);

// Convertendo um objeto JavaScript para JSON
let novoJsonStr = JSON.stringify(pessoa);
console.log("JSON convertido:", novoJsonStr);

// Neste exemplo, mostramos como trabalhar com JSON em JavaScript. Primeiro, temos uma string no formato JSON. Utilizamos o método JSON.parse() para converter essa string em um objeto JavaScript. Em seguida, podemos acessar as propriedades do objeto normalmente. Também demonstramos como converter um objeto JavaScript de volta para uma string JSON usando o método JSON.stringify().
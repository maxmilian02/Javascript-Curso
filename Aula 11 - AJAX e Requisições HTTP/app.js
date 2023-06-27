// Criando uma requisição AJAX
let request = new XMLHttpRequest();

// Configurando a requisição
request.open("GET", "https://api.example.com/data", true);

// Definindo a função de callback para tratar a resposta
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    let data = JSON.parse(request.responseText);
    console.log("Dados da resposta:", data);
  } else {
    console.error("Erro na requisição:", request.status);
  }
};

// Enviando a requisição
request.send();

// Neste exemplo, utilizamos AJAX para fazer uma requisição HTTP para uma API externa. Primeiro, criamos uma instância do objeto XMLHttpRequest. Em seguida, configuramos a requisição utilizando o método open(), especificando o método de requisição (no exemplo, usamos GET) e a URL do endpoint da API. Definimos uma função de callback com onload, que será executada quando a resposta da requisição estiver pronta. Dentro da função de callback, verificamos o status da resposta e tratamos os dados retornados.

// Para poder observar melhor, utilize o index.html e vizualize-o com, como por exemplo, LiveServer(Extensão VScode).
// Após isso abra o terminal (F12) , e o output estará lá!
// Obtendo referência ao elemento HTML
let botao = document.getElementById("meuBotao");

// Adicionando um evento de clique ao botão
botao.addEventListener("click", function() {
  console.log("O botão foi clicado!");
});

// Neste exemplo, mostramos como adicionar um evento de clique a um elemento HTML utilizando JavaScript. Primeiro, obtemos uma referência ao elemento HTML com o getElementById(), passando o ID do elemento desejado. Em seguida, utilizamos o método addEventListener() para adicionar um evento de clique ao elemento. Quando o botão for clicado, a função anônima será executada e exibirá uma mensagem no console.
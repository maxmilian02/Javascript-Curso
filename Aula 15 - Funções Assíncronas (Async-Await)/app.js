// Função assíncrona que simula uma requisição
async function fazerRequisicao() {
    try {
      let resposta = await fetch("https://api.example.com/data");
      let dados = await resposta.json();
      console.log("Dados da resposta:", dados);
    } catch (erro) {
      console.error("Erro na requisição:", erro);
    }
  }
  
  // Chamada da função assíncrona
  fazerRequisicao();

// Neste exemplo, utilizamos as palavras-chave async e await para lidar com funções assíncronas em JavaScript. A função fazerRequisicao() é declarada como uma função assíncrona. Dentro dela, utilizamos a função fetch() para realizar uma requisição HTTP a uma API externa. Utilizamos await para aguardar a resposta da requisição e, em seguida, obtemos os dados da resposta com response.json(). A função é chamada utilizando fazerRequisicao().
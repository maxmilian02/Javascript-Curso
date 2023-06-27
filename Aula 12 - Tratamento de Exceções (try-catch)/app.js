try {
    // Bloco de código que pode gerar uma exceção
    let resultado = 10 / 0;
    console.log("Resultado:", resultado);
  } catch (erro) {
    // Bloco de código para tratar a exceção
    console.error("Ocorreu um erro:", erro);
  }

// Neste exemplo, utilizamos a estrutura try-catch para lidar com exceções em JavaScript. No bloco try, colocamos o código que pode gerar uma exceção. No caso, tentamos realizar uma divisão por zero. Se ocorrer uma exceção durante a execução desse bloco, o fluxo de execução será interrompido e a exceção será capturada pelo bloco catch. Dentro do bloco catch, podemos tratar a exceção de acordo com nossa necessidade.
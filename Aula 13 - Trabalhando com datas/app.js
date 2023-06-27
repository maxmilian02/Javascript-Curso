// Criando uma nova data
let dataAtual = new Date();

// Obtendo os componentes da data
let dia = String(dataAtual.getDate()).padStart(2, '0');
let mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Os meses são indexados de 0 a 11
let ano = dataAtual.getFullYear();

// Exibindo a data formatada
console.log("Data atual:", dia + "/" + mes + "/" + ano);

// Para adicionar um zero a esquerda quando necessário , exemplo ao invês de /6/ > /06/, utilizamos o padStart(2, '0')

// Neste exemplo, utilizamos o objeto Date para trabalhar com datas em JavaScript. Primeiro, criamos uma nova instância do objeto Date, que representa a data atual. Em seguida, utilizamos métodos como getDate(), getMonth() e getFullYear() para obter os componentes da data, como dia, mês e ano. Por fim, exibimos a data formatada no console.
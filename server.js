// Importa o módulo express
const express = require('express');

// Cria a instância do aplicativo express
const app = express();

// Define a porta em que o servidor irá rodar
const porta = 3000;

// Configura o servidor para usar a pasta 'public' para servir arquivos estáticos
app.use(express.static('public'));

// Define a rota principal enviando o arquivo index.html
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// Inicia o servidor na porta definida e exibe uma mensagem no console
app.listen(porta, () => {
    console.log(`Servidor está rodando em http://localhost:${porta}`);
});



// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Middleware para processar JSON
app.use(express.json());

// Rota básica
app.get('/', (req, res) => {
    res.send('Servidor web funcionando!');
});

// Rota para comentários (exemplo)
app.get('/comments', (req, res) => {
    res.json({
        comments: [
            { id: 1, text: 'Primeiro comentário' },
            { id: 2, text: 'Segundo comentário' }
        ]
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});



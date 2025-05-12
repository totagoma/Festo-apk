// festo-backend/index.js
const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json()); // Permite JSON no corpo da requisição
app.use('/api', routes); // Prefixa todas as rotas com /api

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes/routes');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const { request, response } = require('express');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(cors());
app.use(router);

app.use((request, response)=>{
    response.header('Access-Control-Allow-Origin', '*')
})

app.use((request, response, next) =>{
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, request, response, next)=>{
    response.status(error.status || 500);
    return response.send({
        erro: {
            mensagem: error.message
        }
    })
})
module.exports = app;
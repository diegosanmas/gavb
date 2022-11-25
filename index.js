const app = require('./server')
const db = require('./controller/userController')

const port = process.env.PORT;
app.listen(port, ()=>{console.log(`Servidor rodando na porta ${port}`)})
require('dotenv').config()
const express = require('express')
const massive = require('massive')

const ctrl= require('./controller')

const {SERVER_PORT, CONNECTION_STRING} = process.env


const app = express()

app.use(express.json())

app.get('/api/inventory', ctrl.getAllProducts)
// app.get('/api/inventory/:id', ctrl.getOneProduct)
app.post('/api/product', ctrl.addProduct)
// app.put('/api/inventory/:id', ctrl.updateProduct)
// app.delete('/api/inventory/:id', ctrl.deleteProduct)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('DB Ready')
}).catch(err=> {
    console.log(err)
})


app.listen(SERVER_PORT,()=> console.log(`Server listening on port ${SERVER_PORT}`))

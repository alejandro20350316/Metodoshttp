const express = require ('express')

const app = express()

app.get('/', (request, response) =>{
    response.json("Hola GET")
})

app.post('/', (request, response) =>{
    response.json("Hola POST")
})
app.put('/', (request, response) =>{
    response.json("Hola PUT")
})
app.patch('/', (request, response) =>{
    response.json("Hola PATCH")
})
app.delete('/', (request, response) =>{
    response.json("Hola DELETE")
})

/**
 * FUNCIONALIDAD
 * 
 */

//http://localhost:3000/
app.listen(3000, () => {
    console.log('listening on port 3000')
})
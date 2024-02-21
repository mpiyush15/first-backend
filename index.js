const express = require('express')
require ('dotenv').config()
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hospital', (req, res) => {
        res.send("hello and welcome to my hospital")
})

app.get('/login', (req, res) => {
        res.send("<h1>Hello, you are at login page</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
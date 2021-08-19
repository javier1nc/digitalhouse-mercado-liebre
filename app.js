const express = require('express')
const app = express()
const port = 3003
const path = require('path')

app.use(express.static('public')) // Usar recursos estáticos.

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// Ruta /
app.get('/', (req, res) => {
  //res.send('Accediendo a home');
  res.sendFile(path.resolve('./views/index.html'))
})

app.get('/register', (req, res) => {
  res.sendFile(path.resolve('./views/register.html'))
})

app.get('/login', (req, res) => {
  res.sendFile(path.resolve('./views/login.html'))
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


```
npm init 
```

Install Express

```
yarn add express
```

nodemon
```
yarn add nodemon
```

## Estructura de directorios

```
├── node_modules
├── public
│ ├── img
| ├── css
├── views
│ ├── index.html
├── app.js
└── package.json

```


## Hello world example

```javarcript
const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static('public')) // Usar recursos estáticos.
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

Edit
```
{
  "name": "mercado-liebre",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js",
    "develop": "npx nodemon app.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "nodemon": "^2.0.12"
  },
  "devDependencies": {}
}
```



Run with nodemon
```
npm run develop
```
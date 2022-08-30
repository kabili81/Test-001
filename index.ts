import express from "express"

const app = express()
const port = 5000

const prodcuts = [
    {
        id: 1,
        title: 'Kmishë e pantolla',
        price: 31.99
    },
    {
        id: 2,
        title: 'Kapela',
        price: 13.99
    },
    {
        id: 3,
        title: 'Gjaket',
        price: 25.30
    }
]

const todos = [
    {
        id: 1,
        title: "blej qumshtë",
        completed: true
    },
    {
        id: 2,
        title: "gatuaj",
        completed: true
    },
    {
        id: 1,
        title: "meso programim",
        completed: false
    }
]

app.get('/', (req, res) => {
    let name = 'Kabil'
  res.send(`Hello ${name}!!!!`)
})

app.get('/products', (req, res) => {
 res.send(prodcuts)
})

app.get('/todos', (req, res) => {
    res.send(todos)
   })

app.listen(port, () => {
  console.log(`Example app listening on: http://localhost:${port}`)
})
import express from 'express'

const app = express()

app.get('/simple', (req, res) => {
    let suma = 0
    for (let index = 0; index < 10000; index++) {
        suma += index
    }
    res.json({ suma })
})

app.get('/complex', (req, res) => {
    let suma = 0
    for (let index = 0; index < 10e12; index++) {
        suma += index
    }
    res.json({ suma })
})

app.listen(8080, () => console.log('Server Up!'))
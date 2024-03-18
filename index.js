const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('This is my user management server!')
})

app.get('/data', (req, res) =>{
    res.send('This is my second message!')
})

app.get('/name', (req, res) =>{
    res.send('This is my name!')
})
app.listen(port, () => {
  console.log(`my first server is running on port: ${port}`)
})
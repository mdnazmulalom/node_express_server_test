const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

//middleware
app.use(cors());

const users = [
  {id: 1, name: 'Nazmul', email: 'nazmulpciucse@gmail.com'},
  {id: 1, name: 'Alom', email: 'alom@gmail.com'},
  {id: 1, name: 'rimu', email: 'rimu@gmail.com'},
]


app.get('/', (req, res) => {
  res.send('This is my user management server!')
})

app.get('/users', (req, res) =>{
    res.send(users);
})

// app.listen(port, () =>{
//   console.log('server is running on PORT: ${Port}');
// })

app.get('/name', (req, res) =>{
    res.send('This is my name!')
})
app.listen(port, () => {
  console.log(`my first server is running on port: ${port}`)
})
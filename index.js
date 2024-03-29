const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const users = [
  {id: 1, name: 'Nazmul', email: 'nazmulpciucse@gmail.com'},
  {id: 2, name: 'Alom', email: 'alom@gmail.com'},
  {id: 3, name: 'rimu', email: 'rimu@gmail.com'},
]

app.get('/', (req, res) => {
  res.send('This is my user management server!')
})

app.get('/users', (req, res) =>{
  res.send(users);
})

app.post('/users',(req, res) =>{
  console.log('post api hitting');
  console.log(req.body);
  
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
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
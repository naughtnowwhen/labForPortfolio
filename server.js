const express = require('express');
require('dotenv').config();


const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('./public'));


app.get('/', (request, response)=>{
  response.status(200).redirect('index.html');
})

app.use('*', (request, response)=> response.send('nothing'));

app.listen(PORT, ()=>{
  console.log(`listening on port : ${PORT}`);
});
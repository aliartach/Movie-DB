const express = require('express');
const port = 3000;
const app = express();


app.get('/', (req, res) => {
    res.send('OkkK');
  });


  //time
app.get('/time', (req, res) => {
  const now = new Date();
  const hours = now.getHours();
  const seconds = now.getSeconds(); 
  const time = hours+""+seconds;

  res.status(200).send({status:200, message:time})
});

app.get('/hello/:id',(req,res) => {
  const {id} = req.params;
  res.status(200).send({status:200, message:`Hello ${id}`})
}) ;

app.get('/search', (req, res) => {
  const searchQuery = req.query.s;

  if (searchQuery) {
    res.status(200).json({ status: 200, message: 'ok', data: searchQuery });
  } else {
    res.status(500).json({ status: 500, error: true, message: 'you have to provide a search' });
  }
});

  app.use('/test', (req, res) => {
    res.status(200).send({status:200, message:"ok"})
  });



//   app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
//   });


app.listen(port,function(req,res){
    console.log(`Server started at ${port}`);
})



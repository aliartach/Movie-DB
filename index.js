const express = require('express');
const port = 3000;
const app = express();


const movies = [
  { title: 'Jaws', year: 1975, rating: 8 },
  { title: 'Avatar', year: 2009, rating: 7.8 },
  { title: 'Brazil', year: 1985, rating: 8 },
  { title: 'الإرهاب والكباب', year: 1992, rating: 6.2 }
]

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



  app.get('/movies/read',(req,res) => {

  res.status(200).send({status:200, message:'Hello Added ',data:years})
   
  }) ;
  
  app.get('/movies/read/by-date',(req,res) => {
    movies.sort((a, b) => a.year - b.year);
  res.status(200).send({status:200, message:'listed by date',data:movies})
    }) ;
  
    app.get('/movies/read/by-rating',(req,res) => {
      movies.sort((a, b) => a.rating - b.rating);
    res.status(200).send({status:200, message:'listed by Rating',data:movies})
      }) ;
    
      app.get('/movies/read/by-title',(req,res) => {
        movies.sort((a, b) => a.title.localeCompare(b.title));
      res.status(200).send({status:200, message:'listed by Title',data:movies})
        }) ;
      

  app.post('/movies/create',(req,res) => {
  
    res.status(200).send({status:200, message:'Hello '})
  }) ;


  app.put('/movies/update',(req,res) => {
  
    res.status(200).send({status:200, message:'Hello '})
  }) ;


  app.delete('/movies/delete',(req,res) => {
  
    res.status(200).send({status:200, message:'Hello '})
  }) ;
  





//   app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
//   });


app.listen(port,function(req,res){
    console.log(`Server started at ${port}`);
})



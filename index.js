const express = require('express');
const port = 3000;
const app = express();


app.get('*', (req, res) => {
    res.send('OK');
  });






app.listen(port,function(req,res){
    console.log(`Server started at ${port}`);
})


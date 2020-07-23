const express= require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;
// DB Config
const dbAddress = require("./config/key").mongoURL;
//Port
const port=3000;
const app= express();


MongoClient.connect('mongodb-connection-string', (err, client) => {
    // ... do something here
  })


// Bodyparser middleware

app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  app.use(bodyParser.json());

MongoClient.connect(dbAddress, 
    { useNewUrlParser: true,
        useUnifiedTopology: true
     })
     .then(() => console.log("MongoDB successfully connected"))
     .catch(err => console.log(err));

  
app.listen(port,function(){
    console.log("Server Started on",port)
});


app.get('/',(req,res) => {
    res.send("Server Running OK!")
});
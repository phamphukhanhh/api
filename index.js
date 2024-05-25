
const fs = require('fs/promises');
const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World!");
});  
ReadableByteStreamController
app.get("/question", function(req, res){
  fs.readFile("database-MT.json" , "utf-8")
    .then((data) => {
      let questions = data;
      res.send(questions);
    })
    .catch((error) => {
    });
  //res.send("Hello World!");
})


app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
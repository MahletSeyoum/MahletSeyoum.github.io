const express = require('express');
const path = require("path");
const app = express();
const root = path.dirname;


app.use(express.urlencoded({extended:false}))

app.get('/form', (req, res, next) => {
    res.sendFile(path.join(__dirname, "/", '/form.html'));
});

app.post('/result', (req,res,next)=> {
    console.log(req.body.name)
  //  res.json({"name": req.body.name, "age": req.body.age})
    res.send(`Name ${req.body.name} , Age:  ${req.body.age}`);
})


app.listen(3000, () => {
    console.log("Running server on 3000");
   
});
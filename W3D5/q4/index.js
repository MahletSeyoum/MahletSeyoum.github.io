const express = require('express');
const app = express();


app.post('/green', (req, res) => {
    res.redirect("https://localhost:3000/output?name=${name}&age=${age}");
}); 


app.get('/output', (req, res) => {
 let name  = req.query.name;
 if (!name) {
 name = "person";
 }
 
 let age = req.query.age;
 if(!age){
     age = 30;
 }
 res.send(`Welcome ${name}  ${age}`);

});

app.listen(3000);
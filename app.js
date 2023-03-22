// This is our server
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

// to use body-parser
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine', 'ejs');

let newItems  = [];

app.get('/' , function(req,res){
    // javascript date format
    let options = { weekday : 'long' , year : 'numeric' , month : 'long' , day : 'numeric'};
    let date = new Date();
    let currentday = date.toLocaleDateString("en-US" , options);
    //res.send(currentday);
    res.render("list" ,{KindOfDay : currentday , newListItems : newItems} );
});

app.post('/' , (req,res)=>{
 let newItem = req.body.newItem;
 newItems.push(newItem);
 res.redirect('/');
});

app.listen(4000 , ()=> console.log("Server is listening on port 4000"));
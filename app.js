const express = require('express');
const app = express();


// 1-Middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json())
//____________________________________________________________


// 2- Set Static Files
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));
//____________________________________________________________


// 3- Settings
app.set('view engine', 'ejs');
const bcryptjs = require('bcryptjs'); //Call encryption module
//____________________________________________________________


/*
const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
    
}));
*/



// 7 - Rutas
app.get('/', (req, res)=>{
    return res.render('home');
})


app.listen(3309, (req, res)=>{
    console.log("");
    console.log("-------------------------------------------");
    console.log("SERVER RUNNING IN http://localhost:3309");
});


// https://www.solumedia.com.ar/radios/8682/index.html pagina radio 

// Load express 
const express = require('express')
const path = require('path')
// Require studentInfo

const studentInfo = require('./data/studentInfo');


// Create our express app
const app = express();

// Configure the app
// Configure the app (app.set)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'));
// app.get('/home', function(req, res){
//     res.render('home')
// })

app.get('/students/:id', function(req, res) {
    console.log(`The value for the :id route parameter is: ${req.params.id}`);
    res.render('students/student', {student: studentInfo.getOne(req.params.id)});
  });


app.get('/', function(req, res){
    res.send('<h1>hello world</h1>')
})

app.get('/students', function(req, res){
    const students = studentInfo.getAll();
    res.render('students/index', { students })
})

app.listen(3001, function(){
    console.log('it is happening')
})
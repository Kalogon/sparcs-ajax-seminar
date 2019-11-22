const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const app = express()
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method
      delete req.body._method
      return method
    }
}))


app.set('view-engine','ejs');
let todos = [];
let last_id = 0;

app.post('/todos', function(req, res) {
    const todo = { id: last_id, content: req.body.content };
    todos.push(todo);
    last_id++;
    res.status(200);
    res.redirect('/todos');
});

app.post('/ajax_send', function(req, res) {
    const todo = { id: last_id, content: req.body.content };
    todos.push(todo);
    last_id++;
    res.status(200);
    res.json(todo);
});


app.get('/todos', function(req, res) {
    res.status(200);
    res.sendFile(__dirname+"/views/index.html");
});

app.put('/todos/:id', function(req, res) {
    todos.forEach(todo => {
        if (todo.id.toString() === req.params.id) {
            todo.content = req.body.content;
            res.status(200);
            res.redirect('/todos');
        }
    });
});

app.delete('/todos/:id', function(req, res) {
    todos = todos.filter(todo => todo.id.toString() !== req.params.id)
    res.status(200);
    res.redirect('/todos');
});
 
app.listen(3000,function(){
    console.log("hello");
})
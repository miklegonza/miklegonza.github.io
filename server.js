const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/assets', express.static('assets'));
app.use('/assets', express.static(__dirname + '/assets'));
console.log(__dirname + '/assets');

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: __dirname });
});

app.get('/games', function(req, res) {
    res.sendFile('games/dashboard.html', { root: __dirname });
});

app.get('/games/tic-tac-toe', function(req, res) {
    res.sendFile('games/tic-tac-toe.html', { root: __dirname });
});

app.listen(3000);

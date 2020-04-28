const functions = require('firebase-functions');
const express = require('express');
const app = express();
const path = require('path');
const compression = require('compression');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mustacheExpress = require('mustache-express');


app.use(express.json());
app.use(compression());
app.use(cors());
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', mustacheExpress(path.join(__dirname , '/views') + '/partials', '.html'));  // register file extension mustache
app.set('view engine', 'html');                 // register file extension for partials
app.set('views', path.join(__dirname , '/views'));

app.get('/home', (req, res, next) => {
    res.render('home', {msg: "Welcome "} )
})

exports.app = functions.https.onRequest(app);
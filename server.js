'use strict';

let express = require('express');
let bodyParser = require('body-parser');

let session = require('cookie-session');

let app = express();

app.use(session({ secret: "Shh, its a secret!" }));
//app.use(express.static(__dirname + '/../public'));

app.use(express.static(__dirname + '/assets/scripts'));
app.use(express.static(__dirname + '/assets/css'));

//new line
app.use(express.static(__dirname + '/../dist'));

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/dist');
app.set('view engine', 'html');


// The request body is received on GET or POST.
// A middleware that just simplifies things a bit.
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

// Get the index page:
app.get('/', function (req, res) {
    res.render('main', {  // Note that .html is assumed.
        errors: ''
    });
});

// Start the server
app.listen(8000);
console.log('Listening on port 8000');

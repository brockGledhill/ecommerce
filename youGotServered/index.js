var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    massive = require('massive'),
    connectionString = 'postgres://postgres:1234@localhost/massive-node';
//maybe do express-session and passport and passport-facebook?
var app = module.exports = express();

app.use(bodyParser());
app.use(cors());

var massiveInstance = massive.connectSync({connectionString: connectionString});

app.set('db', massiveInstance);

var mainCtrl = require('./mainCtrl');

app.listen(8000, function(){
  console.log('I pity 8000 fools');
});

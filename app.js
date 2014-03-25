/*
 * Module dependencies
 */
var express = require('express')
  , less = require('less-middleware');
var uuid = require('node-uuid');



var app = express()
var store  = new express.session.MemoryStore;

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))

app.use(less(__dirname + '/public'));


app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'))
app.use(express.cookieParser());
app.use(express.session({ secret: '983E8B1C1EA42512831F28854F374', store: store }));





require('./routes')(app,uuid)




  // Handles 404
  app.use(function(req, res) {
     res.send('404: Page not Found', 404);
  });
  
  // Handle 500
  app.use(function(error, req, res, next) {
     res.send('500: Internal Server Error. EEEK! What did you do?!' + error, 500);
  });

//app.listen(3000)

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


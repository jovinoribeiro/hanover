var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

//adding the API stuff here
var router = express.Router();

//Add all Beers

router.get("/beer/all", function (req, res) {
  console.log('in get /beer/all');
  request.get({ url: "http://api.brewerydb.com/v2/beers?styleId=3&hasLabels=Y&key=4e7d623f860337f84e64c5be5c80f8ea"},
    function(error, response, body) {
      res.json(JSON.parse(body));
    });
});

router.get('/beer/name/:name', function(req, res) {
  console.log('in /beer/name');
  var beerName = req.params.name;
    request.get({ url: "http://api.brewerydb.com/v2/beers?name=" + beerName + "&hasLabels=Y&key=4e7d623f860337f84e64c5be5c80f8ea"},
    //request.get({ url: "http://api.brewerydb.com/v2/search?q=" + beerName + "&hasLabels=Y&type=beer&key=4e7d623f860337f84e64c5be5c80f8ea"},
    function(error, response, body) {
        res.json(JSON.parse(body));
    });
});

router.get('/beer/id/:id', function(req, res) {
  console.log('in /beer/id');
  var beerId = req.params.id;
  console.info('beerId=' + beerId);
  var inurl = "http://api.brewerydb.com/v2/beer/" + beerId + "?key=4e7d623f860337f84e64c5be5c80f8ea";
  console.info(inurl);
  request.get({ url: inurl }, 
    function(error, response, body) {
      console.log( JSON.parse(body) );
      res.json(JSON.parse(body));
    });
});

router.get('/brewery/all', function(req, res) {
  console.log('in /brewery/all');
  request.get({ url: "http://api.brewerydb.com/v2/breweries?established=2015&hasImages=Y&key=4e7d623f860337f84e64c5be5c80f8ea"},
    function(error, response, body) {
      res.json(JSON.parse(body));
    });
});

router.get('/brewery/name/:name', function(req, res) {
  console.log('in /brewery/name/');
  var breweryName = req.params.name;
  request.get({ url: "http://api.brewerydb.com/v2/breweries?name=" + breweryName + "&key=4e7d623f860337f84e64c5be5c80f8ea"}, 
    function(error, response, body) {
      res.json(JSON.parse(body));
    });
});

router.get('/brewery/id/:id', function(req, res) {
  console.log('in /brewery/id');
  var breweryId = req.params.id;
  console.log(breweryId);
  var inurl = 'http://api.brewerydb.com/v2/brewery/' + breweryId + "?key=4e7d623f860337f84e64c5be5c80f8ea";
  request.get( { url: inurl},
    function(error, response, body) {
      res.json(JSON.parse(body));
    });
});

router.get('/brewery/postalCode/:postalCode', function(req, res) {
  console.log('in /brewery/postalCode');
  var postalCode = req.params.postalCode;
  request.get({ url: "http://api.brewerydb.com/v2/locations?postalCode=" + postalCode + "&key=4e7d623f860337f84e64c5be5c80f8ea"},
    function(error, response, body) {
      res.json(JSON.parse(body));
    });
});

app.use('/brewerydb', router);
//END OF API STUFF

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});





module.exports = app;

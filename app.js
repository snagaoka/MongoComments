var restify = require('restify');
var mongoose = require('mongoose');

mongoose.connect('mongodb://user1:monguse53@ds027509.mongolab.com:27509/mongocomments')

// Create the comment schema
var Schema = mongoose.Schema;

// Define the comment schema


var server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/echo/:name', function (req, res, next) {
  res.send(req.params);
  return next();
});

server.get('/', function (req, res){
	console.log('someone_at_website');
	res.send('welcome!');
})

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});

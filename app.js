var restify = require('restify');
var mongoose = require('mongoose');

mongoose.connect('mongodb://user1:monguse53@ds053429.mongolab.com:53429/tasksdb')

// Create the comment schema
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
	title     : String
  //, body      : String
  //, date      : Date
});

var CommentModel = mongoose.model('CommentModel', CommentSchema);

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

// GET

server.get('/', function (req, res){
	console.log('someone_at_website');
	res.send('welcome!');
});

// POST
server.post('/comments', function (req, res){
	res.send('your comments are saved');

	// create instance of model -- mongoosejs constructing documents
	var post = new CommentModel({
		comment: req.body.title
	});
	comment.save(function (err, t){

	});
});


server.listen(3000, function () {
  console.log('%s listening at %s', server.name, server.url);
});

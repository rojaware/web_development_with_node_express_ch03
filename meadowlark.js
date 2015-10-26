var express = require('express');
var app = express();
// set up handle bars view engine
var handlebars = require('express3-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.set('port', process.env.PORT || 3000);

// CURSTOM 404 PAGE
app.use(function(req, res) {
	res.type('text/plain1');
	res.status(404);
	res.render('404 - Not Found');
});

// customer 500 error page
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	;res.render('500 - server error')
});

app.get('/', function(req, res) {
	res.type('text/plain');
	res.render('Meadowlark Travel');
});


app.get('/about', function(req, res) {
	res.type('text/plain');
	res.render('About Meadowlark Travel');
});

// custom 404 page
app.use( function(req, res, next) {
	res.type('text/plain');
	res.status(404);
	res.render('404 - Not found');
});


app.listen(app.get('port'), function() {
	console.log('Express started on http:localhost:' + app.get('port'))
 + '; press Ctrl-C to terminate'});

var MongoClient = require('mongodb').MongoClient;

var state = {db:null};

exports.connect = function(done) {
	if(state.db) return done();

	MongoClient.connect('mongodb://mongo', {useUnifiedTopology: true})
		.then(client => {
			state.db = client.db('notes');
			done();
		})
		.catch(err => console.log(err));
};

exports.get = function(){
	return state.db;
};
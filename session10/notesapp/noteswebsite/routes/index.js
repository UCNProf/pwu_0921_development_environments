var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
	var collection = db.get().collection('notes');

	collection.find().toArray().then(result => {
		res.render('index', { title: 'Notes', notes: result });
	});
});

module.exports = router;

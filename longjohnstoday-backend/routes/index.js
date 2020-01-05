var express = require('express');
var router = express.Router();
var api = require('./api');

router.use('/api', api);

/* GET home page. */
router.get('/', function (req, res, next) {
  return res.json({ page: 'home' });
});

module.exports = router;

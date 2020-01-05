var router = require('express').Router();

router.get('/', function(req, res, next) {
  res.json( { page: 'user' });
});

module.exports = router;
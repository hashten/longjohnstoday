var router = require('express').Router();

router.get('/', function(req, res, next) {
  res.json( { user: Math.random().toString(36).substring(2,15) });
});

module.exports = router;
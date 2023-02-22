var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('card_93/index', { name: '周士斌',id: '210410493' });
});

module.exports = router;

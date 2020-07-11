var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Hello, Fetch!' });
});

router.get('/title/:title', (req, res, next) => {
  res.json({ title: req.params.title });
})

router.post('/title', (req, res, next) => {
  res.json({ 'title': req.body.title });
  // res.send('HELLO WORLD'); // Error 발생
})
module.exports = router;
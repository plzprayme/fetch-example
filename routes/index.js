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
  
})

router.get('/ajax', (req, res, next) => {
  for(;;) console.log(); // async=false => front page block
  res.json({bool: task().then(res => res)});
})
module.exports = router;
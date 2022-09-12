var express = require('express');
var router = express.Router();

/* GET users listing. */
// bc our base path for users.js is '/users' and the route names concatenate, the final path is 'localhost:3000/users/all'
router.get('/all', function(req, res, next) {
  res.send('respond with a resource');
});

// final url for this route is /users/single
router.get('/single', (req, res) => {
  res.json({
    success: true,
    user: "Single User"
  })
})
module.exports = router;

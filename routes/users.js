var express = require('express');
var router = express.Router();

//named import (require) - imports whole object
var { validateUserData } = require("../validation/users")

const userList = [];

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
});

router.post('/create-one', (req, res) => {

  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const age = req.body.age;
  const favoriteFoods = req.body.favoriteFoods;
  
  const userData = {
    email,
    firstName,
    lastName,
    age,
    favoriteFoods,
    fullName: firstName + lastName,
    createdAt: new Date(),
    lastModified: new Date()
  };

  const userDataCheck = validateUserData(userData);

  if (userDataCheck.isValid === false){
    res.json({
      success: false,
      message: userDataCheck.message
    })
    return;
  }
  //add to array after validation
  userList.push (userData);

  res.json({
    success: true
  });

})

module.exports = router;

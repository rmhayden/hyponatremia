//PATH STARTS WITH localhost:4000/users

///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()
const usersCtrl = require("../controllers/users")

///////////////////////////////
// ROUTES
////////////////////////////////

// INDEX - GET
router.get('/', usersCtrl.index)

///////////////////////////////
// SHOW - DETAIL - GET
////////////////////////////////
router.get('/:id', usersCtrl.show)

///////////////////////////////
// CREATE - POST
////////////////////////////////
router.post('/', usersCtrl.create)

///////////////////////////////
// DESTROY - DELETE 
////////////////////////////////
router.delete('/:id', usersCtrl.delete)

///////////////////////////////
// UPDATE - PUT
////////////////////////////////
router.put('/:id', usersCtrl.update)

// MISSING - NEW (rendering a template for creating a post)
// MISSING - EDIT (rendering a template for editing a speific post)


router.get('/check-token', usersCtrl.checkToken);

module.exports = router
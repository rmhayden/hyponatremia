// PATH STARTS WITH localhost:4000/cases 

///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()
const casesCtrl = require("../controllers/cases")


///////////////////////////////
// ROUTES
////////////////////////////////

// CASES INDEX ROUTE
router.get('/', casesCtrl.index)

///////////////////////////////
// SHOW - DETAIL - GET
////////////////////////////////
router.get('/:id', casesCtrl.show)

///////////////////////////////
// CREATE - POST
////////////////////////////////
router.post('/', casesCtrl.create)

///////////////////////////////
// DESTROY - DELETE 
////////////////////////////////
router.delete('/:id', casesCtrl.delete)

///////////////////////////////
// UPDATE - PUT
////////////////////////////////
router.put('/:id', casesCtrl.update)

// MISSING - NEW (rendering a template for creating a post)
// MISSING - EDIT (rendering a template for editing a speific post)

module.exports = router
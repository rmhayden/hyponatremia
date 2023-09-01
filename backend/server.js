///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// initialize .env variables
require("dotenv").config();
require('./config/db.connection.js')
const usersRouter = require('./routes/users')
const casesRouter = require('./routes/cases')

const cors = require("cors")
const morgan = require("morgan")



// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT } = process.env;


// import express
const express = require("express");

// create application object
const app = express();

///////////////////////////////
// MIDDLEWARE
////////////////////////////////
app.use(express.urlencoded({extended:true}))
app.use(express.json()); // parse json bodies - this will run before our request accesses the people router

app.use(cors()); // to minimize cors errors, open access to all origins
app.use(morgan("dev")); // logging for development

///////////////////////////////
// ROUTES
////////////////////////////////

// all requests for endpoints that begin with '/users'
app.use('/users', usersRouter)
app.use('/cases', casesRouter)


app.get("/", (req, res) => {
    res.send("hello world");
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
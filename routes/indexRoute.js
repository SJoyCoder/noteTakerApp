const indexRoute = require('express').Router();


// require notesRoute
const notesRoute = require('./notesRoute');


// tell it the index how to route it, http://localhost:3001/notes
indexRoute.use('/notes', notesRoute);


module.exports = indexRoute;
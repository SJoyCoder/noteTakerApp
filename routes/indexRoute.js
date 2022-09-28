const index = require('express').Router();

// require notesRoute
const notesRoute = require('.notesRoute');

const app = express();

// tell it the index how to route it, http://localhost:3001/notes
index.use('/notes', notesRoute);

module.exports = indexRoute;
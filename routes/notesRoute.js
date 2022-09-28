const notesRoute = require('express').Router();

// const { readFromFile, readAndAppend } = require('../Develop/db/db.json');

notesRoute.get('/', (req, res) => {
    console.info(`${req.method} request received for feedback`);
  
    readFromFile('./db/feedback.json').then((data) => res.json(JSON.parse(data)));
  });
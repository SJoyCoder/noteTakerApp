const notesRoute = require('express').Router();
const uuid = require('../Develop/db/uuid');

// const { readFromFile, readAndAppend } = require('../Develop/db/db.json');

notesRoute.get('/', (req, res) => {
    console.info(`${req.method} notes have been recieved`);
  
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

  // POST Route for notes
  notesRoute.post('/', (req,res) => {
    console.info(`${req.method} request to submit notes`);

    // destructuring
    const { title, text } = req.body;
    if (title && text) {
        // note object to be saved
        const newNote = {
            title,
            text,
            id: uuid,
        };
        readAndAppend(newNote, '../db/db.json');

        const response = {
            status: 'IT WORKED',
            body: newNote,
        };

        res.json(response);
    }else{
        res.json('ERROR IN POST');
    }
  });

  module.exports = notesRoute;
const notesRoute = require('express').Router();
const uuid = require('../db/uuid');

const { readFromFile, readAndAppend, writeToFile } = require('../db/fsUtils.js');

notesRoute.get('/', (req, res) => {
    console.info(`${req.method} notes have been recieved`);
  
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

  // POST Route for notes
  notesRoute.post('/', (req,res) => {
    console.info(`${req.method} request to submit note`);

    // destructuring
    const { title, text } = req.body;
    if (title && text) {
        // note object to be saved
        const newNote = {
            title,
            text,
            id: uuid(),
        };
        readAndAppend(newNote, './db/db.json');

        const response = {
            body: newNote,
        };

        res.json(response);
    }else{
        res.json('ERROR IN POST');
    }
  });

  notesRoute.delete('/:id', (req,res) => {
    console.log(req.params.id); 
    const noteId = req.params.id;
    readFromFile('./db/db.json')
        .then((json) => {
            const result = json.filter((notes) => notes.id !== noteId)
            // writing new array without deleted note
            // writeToFile('./db/db.json', result);
            console.log(result);
            res.status(200).json(`Note ${noteId} has been deleted`);
        });
    
    }) 

  module.exports = notesRoute;
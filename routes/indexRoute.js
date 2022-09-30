const indexRoute = require('express').Router();

const { readFromFile, writeToFile } = require('../db/fsUtils');
// require notesRoute
const notesRoute = require('./notesRoute');


// tell it the index how to route it, http://localhost:3001/notes
indexRoute.use('/notes', notesRoute);

indexRoute.delete('/', (req,res) => {
    console.info(`${req.method} note deleted`);
    const noteId = req.params.id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((indexRoute) => indexRoute.id !== noteId);

            // writing new array without deleted note
            writeToFile('./db/db.json', result);

            res.json(`Note ${noteID} has been deleted`);
        });

    }) 

    // tips.delete('/:tip_id', (req, res) => {
    //     const tipId = req.params.tip_id;
    //     readFromFile('./db/tips.json')
    //       .then((data) => JSON.parse(data))
    //       .then((json) => {
    //         // Make a new array of all tips except the one with the ID provided in the URL
    //         const result = json.filter((tip) => tip.tip_id !== tipId);
      
    //         // Save that array to the filesystem
    //         writeToFile('./db/tips.json', result);
      
    //         // Respond to the DELETE request
    //         res.json(`Item ${tipId} has been deleted 🗑️`);
    //       });
    //   });

module.exports = indexRoute;
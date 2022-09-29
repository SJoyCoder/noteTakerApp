const express = require('express');
// const { get } = require('http');
const path = require('path');
const api = require('./routes/indexRoute');


const PORT = process.env.PORT || 3001;

const app = express(); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);
app.use(express.static('public'));

// // Route for home page
// app.get('/', (req, res) =>
// res.sendFile(path.join(__dirname, '/public/assets/index.html'))
// );

// Route for notes page
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, './public/notes.html'))
);

// app.get("/api/notes", (req, res) => {


// }) 
// Telling it to listen for the port
app.listen(PORT, () =>
  console.log("App listening at http://localhost:"+PORT)
);

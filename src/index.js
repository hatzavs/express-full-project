//open new project:
// terminal: npm init
// terminal: git init
// main_project: create ".gitignore"
// main_project: create library "src" and in src create "index.js"
// terminal: npm install nodemon --save-dev (or -D)
// package.json --> under scripts--> "watch": "nodemon src/index.js",
// npm i express --save
// npm i body-parser --save
// save (ctrl+S)
// terminal: npm run watch

const express = require('express');
const bodyParser = require('body-parser'); // converts request body to JSON
const routes = require('./config/routes');
const app = express();
const port = 4000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    next();
});

app.use(routes);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});

const express = require('express');
const routes = express.Router();
const Tasks = require('../controllers/tasks');
const Albums = require('../controllers/albums');

routes.put('/task', Tasks.create);

routes.get('/task', Tasks.getAll);

routes.delete('/task/:id', Tasks.delete);

routes.get('/album', Albums.getAll);

routes.put('/album', Albums.create);

routes.delete('/album/:id', Albums.delete);

routes.post('/album/:id', Albums.edit);

module.exports = routes;
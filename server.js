const express = require('express');

const projectsRouter = require('./routes/projects-router');

const server = express();

server.use(express.json());

server.use('/api/projects', projectsRouter);

server.get('/', (req, res) => {
  res.send('Server is up & running');
});

module.exports = server;

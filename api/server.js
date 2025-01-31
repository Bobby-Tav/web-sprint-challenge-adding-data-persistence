// build your server here and require it from index.js
require('dotenv').config()

const express = require('express');
const resourceRouter = require('./resource/router')
const projectRouter = require('./project/router')
const taskRouter = require('./task/router')
const helmet = require('helmet')
const cors = require('cors')

const server = express()

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/resources',resourceRouter)
server.use('/api/projects', projectRouter)
server.use('/api/tasks',taskRouter)

server.use('*', (req, res, next) => {
    console.log(`hitting ${req.method} ${req.baseUrl}`);
    next({ status: 404, message: 'not found' }); // this object becomes the "err" in the midd below
  });
  
  server.use((err, req, res, next) => { 
    res.status(err.status || 500).json({ message: `Not working` });
  });

module.exports = server;
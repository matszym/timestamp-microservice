'use strict';

let express = require('express'),
app = express(),
config = require('./config/config.js'),
server;

server = app.listen(config.port);
console.log('server is listening on port', config.port);
'use strict';

let express = require('express'),
app = express(),
config = require('./config/config.js'),
timeCtrl = require('./controllers/time.server.controller.js'),
server;

app.use('/:time', timeCtrl.getTime);

server = app.listen(config.port);
console.log('server is listening on port', config.port);
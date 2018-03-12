var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3050;

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port);
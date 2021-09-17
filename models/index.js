const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://wamya:wamya@cluster0.7xqcd.mongodb.net/Test?retryWrites=true&w=majority");

module.exports.User = require('./user');
module.exports.Poll = require('./poll');

var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/todo-api');

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
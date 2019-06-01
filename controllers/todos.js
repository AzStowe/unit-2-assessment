var Todo = require('../models/todo')

module.exports = {
    index,
    create,
};

function index(req, res) {
    res.render('index', {
      todos: Todo.getAll(),
    });
  }

  function create(req, res) {
    req.body.done = false;
    Todo.create(req.body);
    res.redirect('/');
}
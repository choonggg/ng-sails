module.exports = {
  markDone: function(todoId, next){
    Todo.update({id: todoId}, {done: true}).exec(function(err, todo){
      if (err) throw err;
      next(todo);
    });
  },
  markUndone: function(todoId, next){
    Todo.update({id: todoId}, {done: false}).exec(function(err, todo){
      if (err) throw err;
      next(todo);
    });
  }
}

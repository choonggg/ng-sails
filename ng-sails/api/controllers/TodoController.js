/** * TodoController
 *
 * @description :: Server-side logic for managing Todoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  markDone: function(req, res){
    var todoId = (req.body.id) ? req.body.id : undefined
    TodoService.markDone(todoId, function(success){
      res.json(success);
    });
  },
  markUndone: function(req, res){
    var todoId = (req.body.id) ? req.body.id : undefined
    TodoService.markUndone(todoId, function(success){
      res.json(success);
    });
  }
};


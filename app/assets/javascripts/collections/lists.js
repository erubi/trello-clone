TrelloClone.Collections.Lists = Backbone.Collection.extend({
  model: TrelloClone.Models.List,
  
  initialize: function(models, options){
    this.board = options.board;
  },
  
  comparator: function(model){
    return model.get('ord');
  }
});
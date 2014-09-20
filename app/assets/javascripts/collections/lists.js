TrelloClone.Collections.Lists = Backbone.Collection.extend({
  model: TrelloClone.Models.List,
  
  initialize: function(options){
    this.board = options.board;
  }
});
TrelloClone.Collections.Lists = Backbone.Collection.extend({
  model: TrelloClone.Models.Lists,
  
  initialize: function(options){
    this.board = options.board;
  }
});
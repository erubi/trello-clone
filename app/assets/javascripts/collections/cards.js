TrelloClone.Collections.Cards = Backbone.Collection.extend({
  model: TrelloClone.Models.Card,
  
  initialize: function(options){
    this.list = options.list;
  }
});
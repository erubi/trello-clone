TrelloClone.Collections.Cards = Backbone.Collection.extend({
  model: TrelloClone.Models.Card,
  
  initialize: function(models, options){
    this.list = options.list;
  },
  
  comparator: function(model){
    return model.get('ord');
  }
});
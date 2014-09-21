TrelloClone.Models.Card = Backbone.Model.extend({
  urlRoot: 'api/cards',
  
  validate: function(attrs, options){
    if (attrs.title.length <= 0){
      return "Title length must be greater than 0.";
    }
  }
});
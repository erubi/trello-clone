TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: '/api/lists/',
  
  validate: function(attrs, options){
    if (attrs.title.length <= 0){
      return "Title length must be greater than 0.";
    }
  },
  
  cards: function () {
    this._cards = this._cards ||
      new TrelloClone.Collections.Cards([], { list: this });
    return this._cards;
  },
  
  parse: function(payload){
    if (payload.cards){
      this.cards().set(payload.cards);
      delete payload.cards;
    }

    return payload;
  }
});
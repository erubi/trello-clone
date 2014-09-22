TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: '/api/lists/',
  
  initialize: function(){
    this.listenTo(this, 'switchCards', this.switchCards);
  },
  
  switchCards: function(model, list_id){
    this.cards().remove(model);
    var board = TrelloClone.Collections.boards.get(( this.get('board_id') ));
    var newList = board.lists().get(list_id);
    newList.cards().add(model);
  },
  
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
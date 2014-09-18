TrelloClone.Views.CardsShow = Backbone.View.extend({
  template: JST['cards/show'],
  
  tagName: 'li',
  
  className: 'cards-show-el',
  
  events: {
    'click' : 'editCard'
  },
  
  editCard: function(){
    TrelloClone.Views.cardsEdit.editCard(this.model);
  },
  
  initialize: function(){
    
  },
  
  render: function(){
    var content = this.template({card: this.model});
    this.$el.html(content);
    
    return this;
  }
})
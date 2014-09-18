TrelloClone.Views.CardsEdit = Backbone.View.extend({
  template: JST['cards/edit_modal'],
  
  initialize: function(){
  },
  
  events: {
    'click .hide-modal': 'hideModal' 
  },
  
  render: function(){
    var content = this.template({card: this.model});
    this.$el.html(content).appendTo('#modal-container');
    return this;
  },
  
  editCard: function(card, cardCollection){
    this.$el.empty();
    this.model = card;
    this.collection = cardCollection;
    this.render();
    debugger
    this.$el.find('#modal').addClass("is-active");
  },
  
  hideModal: function(){
    event.preventDefault();
    event.stopPropagation();
    this.$el.find('#modal').removeClass("is-active");
  }
});
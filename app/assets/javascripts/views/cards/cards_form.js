TrelloClone.Views.CardsForm = Backbone.View.extend({
  tagName: "form",
  
  template: JST['cards/form'],
  
  initialize: function(options){
    this.list = options.list;
  },
  
  render: function(){
    var content = this.template();
    this.$el.html(this.template);
    
    return this;
  },
  
  events: {
    'click' : 'handleClick',
    'submit' : 'addCard',
    'click .add-card-btn' : 'addCard',
    'click #cancel-add-card' : 'cancelAdd'
  },
  
  handleClick: function(event){
    event.preventDefault();
    event.stopPropagation();
  },
  
  addCard: function(){
    var attrs = this.$el.serializeJSON();
    var card = new TrelloClone.Models.Card(attrs);
    card.set('list_id', this.list.id);
    card.save();
    
    if (card.isValid()){
      this.list.cards().add(card); 
    }
  },
  
  cancelAdd: function(){
    this.list.cards().trigger("remove");
  }
});
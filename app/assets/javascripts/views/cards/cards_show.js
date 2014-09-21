TrelloClone.Views.CardsShow = Backbone.View.extend({
  template: JST['cards/show'],
  
  tagName: 'li',
  
  className: 'cards-show-el',
  
  events: {
    'click' : 'editCard'
  },
  
  editCard: function(){
    TrelloClone.Views.cardsEdit.editCard(this.model, this.collection);
  },
  
  initialize: function(){
    this.listenTo(this.model, "change:description", this.render);
  },
  
  render: function(){
    var content = this.template({card: this.model});
    this.$el.html(content);
    if (this.model.get("description") != null && this.model.get("description") != ""){
      this.$el.addClass("has-description");
    } else {
      this.$el.removeClass("has-description");
    }
    return this;
  }
})
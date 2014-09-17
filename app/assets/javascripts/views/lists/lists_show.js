TrelloClone.Views.ListsShow = Backbone.View.extend({
  template: JST['lists/show'],
  
  tagName: "li",
  
  className: "lists-show-el",
  
  initialize: function(){
    this.cards = this.model.cards();
    this.listenTo(this.model, "sync", this.render);
  },
  
  events: function(){
    'click .add-card-li' : 'addCard'
  },
  
  addCard: function(){
    var cardFormView = new TrelloClone.Views.CardsForm();
    // replace add card li
    
  },
  
  render: function(){
    var content = this.template({list: this.model});
    this.$el.html(content);
    
    if (this._subViews && this._subViews.length > 0){
      this.removeSubViews();
    }
    
    this.createSubViews();
    this.attachSubViews();
    this.renderSubViews();
    
    return this;
  },
  
  removeSubViews: function(){
    this._subViews.forEach(function (subView){
      subView.remove();
    });

    this._subViews = [];
  },

  createSubViews: function(){
    var that = this;
    this._subViews = this._subViews || [];
    this.cards.each(function(card){
      var cardView = new TrelloClone.Views.CardsShow({
        model: card
      });
      that._subViews.push(cardView);
    });
  },

  attachSubViews: function(){
    var that = this;

    this._subViews.forEach(function(subView){
      that.$el.find("#cards-ul").append(subView.$el);
    });
  },

  renderSubViews: function(){

    this._subViews.forEach(function(subView){
      subView.render();
    });
  }
});
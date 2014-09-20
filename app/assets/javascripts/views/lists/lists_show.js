TrelloClone.Views.ListsShow = Backbone.View.extend({
  template: JST['lists/show'],
  
  tagName: "li",
  
  className: "lists-show-el",
  
  initialize: function(){
    this.cards = this.model.cards();
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.cards(), "add remove", this.render);
  },
  
  events: {
    'click .add-card-li' : 'addCard',
    'click #delete-list-btn' : 'deleteList'
  },
  
  addCard: function(event){
    event.preventDefault();
    
    var cardFormView = new TrelloClone.Views.CardsForm({list: this.model});
    this._subViews.push(cardFormView);
    this.$el.find('.add-card-li').html(cardFormView.render().$el);
  },
  
  deleteList: function(){
    this.model.destroy();
  },
  
  render: function(){
    var content = this.template({list: this.model});
    this.$el.html(content);
    
    if (this._subViews && this._subViews.length > 0){
      this.removeSubViews();
    }
    
    if (this.cards.length > 0){
      this.createSubViews();
      this.attachSubViews();
      this.renderSubViews(); 
    }
    
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
        model: card,
        collection: that.cards
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
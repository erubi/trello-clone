TrelloClone.Views.BoardsShow = Backbone.View.extend({
  template: JST['boards/show'],
  
  className: "boards-show-el",
  
  initialize: function(){
    this.lists = this.model.lists();
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.lists(), "add remove", this.render);
    this.listenTo(this.model.lists(), "change:ord", this.reSort);
  },
  
  reSort: function(){
    this.model.lists().sort();
  },
  
  render: function(){
    var that = this;
    
    var content = this.template({board: this.model});
    this.$el.html(content);
    
    if (this._subViews && this._subViews.length > 0){
      this.removeSubViews();
    }
    
    this.createSubViews();
    this.attachSubViews();
    this.renderSubViews();

    this.$el.find("#lists-ul").append(this.newListView.render().$el);
    return this;
  },

  removeSubViews: function(){
    this._subViews.forEach(function (subView){
      subView.remove();
    });

    this._subViews = [];
    
    this.newListView.remove();
    this.newListView = null
  },

  createSubViews: function(){
    var that = this;
    
    this.newListView = new TrelloClone.Views.ListsNew({board: this.model});
    
    this._subViews = this._subViews || [];
    this.lists.each(function(list){
      var listView = new TrelloClone.Views.ListsShow({
        model: list
      });
      that._subViews.push(listView);
    });
  },

  attachSubViews: function(){
    var that = this;

    this._subViews.forEach(function(subView){
      that.$el.find("#lists-ul").append(subView.$el);
    });
    
    
  },

  renderSubViews: function(){

    this._subViews.forEach(function(subView){
      subView.render();
    });
    
  }
});
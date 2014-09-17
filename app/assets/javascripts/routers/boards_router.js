TrelloClone.Routers.Boards = Backbone.Router.extend({
  
  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.boards = options.boards;
  },
  
  routes: {
    '' : 'boardsIndex',
    'boards/:id': 'boardsShow'
  },
  
  boardsIndex: function(){
    var view = new TrelloClone.Views.BoardsIndex({
      collection: this.boards
    });
    
    this._swapView(view);
  },
  
  boardsShow: function(id){
    var board = this.boards.getOrFetch(id);
    
    var view = new TrelloClone.Views.BoardsShow({
      model: board
    });
    
    this._swapView(view);
  },
  
  _swapView: function(view){
    if (this._currentView && this._currentView.removeSubViews){
      this._currentView.removeSubViews();
    }
    this._currentView && this._currentView.remove();
    this._currentView = view;
    
    this.$rootEl.html(view.render().$el);
  }
  
})
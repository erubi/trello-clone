TrelloClone.Views.BoardsNew = Backbone.View.extend({
  className: "boards-new-el",
  
  template: JST['boards/new'],
  
  events: {
    'click .create-board-btn' : 'createBoard'
  },
  
  initialize: function(){
    $('#add-dropdown').append(this.render().$el);
  },
  
  render: function(){
    var content = this.template();
    this.$el.html(content);
    
    return this;
  },
  
  createBoard: function(){
    event.preventDefault();
    
    var attrs = this.$el.find('form').serializeJSON();
    var board = new TrelloClone.Models.Board(attrs);
    board.save({}, {
      success: function(board){
        Backbone.history.navigate("#/boards/" + board.id);
      }
    });
    TrelloClone.Collections.boards.add(board);
  }
  
  
});
window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    TrelloClone.Collections.boards = new TrelloClone.Collections.Boards();
    TrelloClone.Collections.boards.fetch({
      success: function(){
        new TrelloClone.Routers.Boards({
          $rootEl: $('#main'),
          boards: TrelloClone.Collections.boards
        });
    
        Backbone.history.start();
      }
    });
    bindClickOutHandlers();
    TrelloClone.Views.boardsNew = new TrelloClone.Views.BoardsNew();
    TrelloClone.Views.cardsEdit = new TrelloClone.Views.CardsEdit();
  }
};


function bindClickOutHandlers(){
  $(document).on('click', function(){
    $('#add-dropdown').removeClass('show-dropdown');
  })
}
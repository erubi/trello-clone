window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    TrelloClone.Collections.boards = new TrelloClone.Collections.Boards();
    new TrelloClone.Routers.Boards({
      $rootEl: $('#content'),
      boards: TrelloClone.Collections.boards
    });
    
    Backbone.history.start();
  }
};
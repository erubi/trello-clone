TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  template: JST["boards/index"],
  
  className: "boards-index",
  
  initialize: function(){
  },
  
  render: function(){
    var content = this.template({boards: this.collection});
    this.$el.html(content);
    
    return this;
  }
  
  
})
TrelloClone.Views.ListsNew = Backbone.View.extend({
  template: JST["lists/new"],
  
  tagName: "li",
  
  className: "lists-new-el",
  
  events: {
    'click .add-list-btn' : 'showListForm',
    'submit' : 'addList'
  },
  
  showListForm: function(){
    this.$el.addClass("show-form");
  },
  
  addList: function(event){
    event.preventDefault();
    var attrs = $(event.target).serializeJSON();
    var list = new TrelloClone.Models.List(attrs)
    list.set('board_id', this.board.id);
    this.board.lists().add(list);
    list.save();
  },
  
  initialize: function(options){
    this.board = options.board;
  },
  
  render: function(){
    var content = this.template();
    this.$el.html(content);
    
    return this;
  }
});
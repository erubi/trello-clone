TrelloClone.Views.ListsShow = Backbone.View.extend({
  template: JST['lists/show'],
  
  tagName: "li",
  
  className: "lists-show-el",
  
  initialize: function(){
    this.cards = this.model.cards();
  },
  
  render: function(){
    var content = this.template({list: this.model});
    this.$el.html(content);
  }
});
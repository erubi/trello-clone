TrelloClone.Views.CardsEdit = Backbone.View.extend({
  template: JST['cards/edit_modal'],
  
  tagName: 'div',
  
  className: 'edit-card-el',
  
  initialize: function(){
  },
  
  events: {
    'click' : 'checkHideModal',
    'click .hide-modal': 'hideModal' ,
    'click #edit-card-title-btn': 'editTitle',
    'click .cancel-edit-button' : 'cancelEdit',
    'submit #edit-card-title-form' : 'saveTitle'
  },
  
  render: function(){
    var content = this.template({card: this.model, list: this.list});
    this.$el.html(content).appendTo('#modal-container');
    return this;
  },
  
  editCard: function(card, cardCollection){
    this.$el.empty();
    this.model = card;
    this.collection = cardCollection;
    this.list = this.collection.list;
    this.render();
    this.$el.find('#modal').addClass("is-active");
  },
  
  hideModal: function(){
    event.preventDefault();
    event.stopPropagation();
    this.$el.find('#modal').removeClass("is-active");
  },
  
  checkHideModal: function(event){
    if(event.target.id == "modal"){
      event.preventDefault();
      this.$el.find('#modal').removeClass("is-active");
    }
  },
  
  editTitle: function(){
    this.$el.toggleClass("edit-title");
  },
  
  saveTitle: function(event){
    event.preventDefault();
    var attrs = $(event.target).serializeJSON();
    this.model.save(attrs);
    this.$el.find('#edit-card-title-btn').html(attrs.title);
    this.cancelEdit();
  },
  
  cancelEdit: function(){
    this.$el.find('input[name=title]').val(this.model.get("title"));
    this.$el.removeClass("edit-title");
  }
});
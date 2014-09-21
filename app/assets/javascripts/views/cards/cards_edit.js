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
    'click #edit-card-desc-btn': 'editDesc',
    'click .edit-description-header span': 'editDesc',
    'click .cancel-edit-button' : 'cancelEdit',
    'submit #edit-card-title-form' : 'saveTitle',
    'submit #edit-card-desc-form' : 'saveDesc'
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
    this.$el.removeClass("edit-title");
    this.$el.removeClass("edit-desc");
  },
  
  checkHideModal: function(event){
    if(event.target.id == "modal"){
      event.preventDefault();
      this.$el.find('#modal').removeClass("is-active");
    }
  },
  
  editTitle: function(){
    this.$el.addClass("edit-title");
    this.$el.removeClass("edit-desc");
  },
  
  saveTitle: function(event){
    event.preventDefault();
    var attrs = $(event.target).serializeJSON();
    this.model.save(attrs);
    this.$el.find('#edit-card-title-btn').html(attrs.title);
    this.cancelEdit();
  },
  
  editDesc: function(){
    this.$el.addClass("edit-desc");
    this.$el.removeClass("edit-title");
  },
  
  saveDesc: function(event){
    event.preventDefault();
    var attrs = $(event.target).serializeJSON();
    this.model.save(attrs);
    this.cancelEdit();
    this.editCard(this.model, this.collection);
  },
  
  cancelEdit: function(){
    this.$el.find('input[name=title]').val(this.model.get("title"));
    this.$el.find('textarea').val(this.model.get("description"));
    this.$el.removeClass("edit-title");
    this.$el.removeClass("edit-desc");
  }
});
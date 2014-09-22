TrelloClone.Views.CardsShow = Backbone.View.extend({
  template: JST['cards/show'],
  
  tagName: 'li',
  
  className: 'cards-show-el',
  
  events: {
    'click' : 'editCard',
    'drop' : 'drop',
    'switchList' : 'switchList',
    'mousedown' : 'toggleGrab',
    'mouseUp' : 'toggleGrab'
  },
  
  toggleGrab: function(){
    this.$el.toggleClass('grabbing')
  },
  
  switchList: function(event, list_id){
    if (list_id != this.model.get("list_id")){
      this.model.set('list_id', list_id);
      this.model.save();
      this.collection.list.trigger('switchCards', this.model, list_id);
    }
  },
  
  drop: function(event, index){
    this.model.set('ord', index);
    this.model.save();
  },
  
  editCard: function(){
    TrelloClone.Views.cardsEdit.editCard(this.model, this.collection);
  },
  
  initialize: function(){
    this.listenTo(this.model, "change:description", this.render);
  },
  
  render: function(){
    var content = this.template({card: this.model});
    this.$el.html(content);
    if (this.model.get("description") != null && this.model.get("description") != ""){
      this.$el.addClass("has-description");
    } else {
      this.$el.removeClass("has-description");
    }
    return this;
  }
})
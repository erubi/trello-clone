TrelloClone.Views.BoardsShow = Backbone.View.extend({
  template: JST['boards/show'],
  
  className: "boards-show-el",
  
  initialize: function(){
    this.lists = this.model.lists();
    this.listenTo(this.model, "sync", this.render);
  },
  
  render: function(){
    var content = this.template({board: this.model});
    this.$el.html(content);
    
    if (this._subViews && this._subViews.length > 0){
      this.removeSubViews();
    }
    
    this.createSubViews();
    this.attachSubViews();
    this.renderSubViews();

    return this;
  },

  removeSubViews: function(){
    this._subViews.forEach(function (subView){
      subView.remove();
    });

    this._subViews = [];
  },

  createSubViews: function(){
    var that = this;
    this._subViews = this._subViews || [];
    this.lists.each(function(list){
      var listView = new TrelloClone.Views.ListsShow({
        model: list
      });
      that._subViews.push(listView);
    });
  },

  attachSubViews: function(){
    var that = this;

    this._subViews.forEach(function(subView){
      that.$el.find("#lists-ul").append(subView.$el);
    });
  },

  renderSubViews: function(){

    this._subViews.forEach(function(subView){
      subView.render();
    });
  }
});
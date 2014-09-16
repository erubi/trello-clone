TrelloClone.Views.BoardsShow = Backbone.View.extend({
  template: JST['boards/show'],
  
  initialize: function(){
    
  },
  
  render: function(){
    var content = this.template({board: this.model});
    this.$el.html(content);
    
    // if (this._subViews && this._subViews.length > 0){
   //    this.removeSubViews();
   //  }
   //
   //  this.createSubViews();
   //  this.attachSubViews();
   //  this.renderSubViews();
   //
    return this;
  }
})// ,
//
//   removeSubViews: function(){
//     this._subViews.forEach(function (subView){
//       subView.remove();
//     });
//
//     this._subViews = [];
//   },
//
//   createSubViews: function(){
//     var that = this;
//     this._subViews = this._subViews || [];
//
//     this.userLists.each(function(list){
//       var listCardView = new Wunderclone.Views.ListsCard({
//         model: list,
//         editable: true
//       });
//       that._subViews.push(listCardView);
//     });
//   },
//
//   attachSubViews: function(){
//     var that = this;
//
//     this._subViews.forEach(function(subView){
//       that.$el.find("#user-lists-ul").append(subView.$el);
//     });
//   },
//
//   renderSubViews: function(){
//
//     this._subViews.forEach(function(subView){
//       subView.render();
//     });
//   }

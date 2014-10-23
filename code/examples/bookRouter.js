var BookRouter = Backbone.Router.extend({
  initialize: function() {
      
  },
  routes: {
    "show/:title":        "show",  // 
  },
  show: function(query) {
    var bookModel = new BookModel({
        title: query
    });

    var bookView = new BookView({el: $('body'), model: bookModel});

    bookView.render();
  }
});

var BookRouter = Backbone.Router.extend({
  initialize: function() {
      
  },
  routes: {
    "search/:title":        "search",  // #search/kiwis
  },
  search: function(query) {
    var bookModel = new BookModel({
        title: query
    });

    var bookView = new BookView({el: $('body'), model: bookModel});

    bookView.render();
  }
});

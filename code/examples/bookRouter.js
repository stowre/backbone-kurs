var BookRouter = Backbone.Router.extend({
  initialize: function() {

  },
  routes: {
    "search/:title":        "search",  // #search/kiwis
  },
  search: function(query) {
	this.listView.search(query);
  }
});

  var BookCollection = Backbone.Collection.extend({
      model: BookModel,
      url: '/api/books',
      
      comparator: "published",
      
	search: function(query) {
		this.models = this.where({title: query});
	}
  });

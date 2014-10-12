  var BookCollection = Backbone.Collection.extend({
      model: BookModel,
      url: '/api/books',
      
      comparator : function(model1, model2) {
        var model1Published = model1.get("published");
        var model2Published = model2.get("published");

        if(model1Published > model2Published) {
            return 1;
        } else if(model1Published === model2Published) {
            return 0;
        } else {
            return -1;
        }
    },
	search: function(query) {
		this.models = this.where({title: query});
	}
  });

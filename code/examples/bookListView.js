var template = "<li><%- title -></li>";

var BookListView = Backbone.View.extend({
    tagName: 'ul',
    className: 'list',
    initialize: function() {
	this.render();
    },
    render: function() {
	that = this;
	this.$el.empty();
	this.collection.each(function(model) {
		var view = new BookView({model: model});			
		that.$el.append(view.render().$el);
	});
	return this;
    },
    search: function(query) {
	this.collection.search(query);
	this.render();
    }
});

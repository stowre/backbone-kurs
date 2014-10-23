var NewsListView = Backbone.View.extend({
    tagName: 'ul',

    events: {
    },

    initialize: function() {
      this.collection.on('add', this.render, this);
    },

    render: function() {
      var $el = $(this.el)
      var self = this;
      $el.empty();

      this.collection.each(function(newsModel) {
        var newsView, sidebarItem;
        newsView = new NewsView({ model: newsModel });
        $el.append(newsView.render().el);
      });

      return this;
    } 
});

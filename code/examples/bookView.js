var BookView = Backbone.View.extend({
    tagName: 'li',
    className: 'list-menu-item',

    events: {
      'click': 'increment'
    },

    initialize: function() {
      this.counter = 0;
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.remove, this);
    },

    render: function() {
      var html = "<div>" + this.model.get('title') + "</div><div>" + this.counter + "</div>";
      this.$el.html(html);
      return this;
    },
    
    increment: function() {
        this.counter++;
    }

  });

var BookView = Backbone.View.extend({
    tagName: 'li',
    className: 'list-menu-item',

    events: {
      'click': 'remove'
    },

    initialize: function() {
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.remove, this);
    },

    render: function() {
      var html = "<div>" + this.model.get('title') + "</div>";
      this.$el.html(html);
      return this;
    },

  });

var template = "<div class='col-6 col-sm-6 col-lg-4'> <h2><%- heading %></h2><div>av <%- author %></div><p> <%- content %></p></div>";

var NewsView = Backbone.View.extend({
    tagName: 'li',
    className: 'list-menu-item',

    template: _.template(template),

    events: {
      'click': 'open'
    },

    initialize: function() {
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.remove, this);
    },

    render: function() {
      var $el = $(this.el);
      $el.data('listId', this.model.get('id'));
      var html = this.template(this.model.toJSON());
      $el.html(html);
      return this;
    },

  });

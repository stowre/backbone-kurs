var NewsView = Backbone.View.extend({
    tagName: 'li',
    className: 'list-menu-item',

    template: _.template($('#NewsItemTemplate').html()),

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
      var html = this.template({model: this.model.toJSON()});
      $el.html(html);
      return this;
    }

});

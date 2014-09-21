define([
  'jquery',
  'underscore',
  'backbone',
  'text!../templates/NewsItem.html'

], function($, _, Backbone, template){
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

  return NewsView;
});
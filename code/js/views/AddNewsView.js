define([
  'jquery',
  'underscore',
  'backbone',
  'text!../templates/AddNews.html',
  'models/NewsModel',

], function($, _, Backbone, template, NewsModel){
var AddNewsView = Backbone.View.extend({
    template: _.template(template),

    events: {
      'submit form' : 'submitFormHandler',
      'change #author' : 'authorChangeHandler',
      'change #headline' : 'headlineChangeHandler',
      'change #newsContent' : 'newsContentChangeHandler'     
    },

    initialize: function() {
      this.model = new NewsModel();
    },

    render: function() {
      var $el = $(this.el);
      var html = this.template();
      $el.html(html);
      return this;
    },

    submitFormHandler: function(e) {
      e.preventDefault();
      console.log("adding news to collection");
      this.collection.add(this.model);
      this.model = new NewsModel();
      this.render();
    },

    authorChangeHandler: function(e) {
      this.model.set("author", $(e.currentTarget).val());
    },

    headlineChangeHandler: function(e) {
      this.model.set("heading", $(e.currentTarget).val());
    },

    newsContentChangeHandler: function(e) {
      this.model.set("content", $(e.currentTarget).val());
    }

  });

  return AddNewsView;
});
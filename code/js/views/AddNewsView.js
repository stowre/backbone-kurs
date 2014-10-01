define([
  'jquery',
  'underscore',
  'backbone',
  'models/NewsModel',

], function($, _, Backbone, NewsModel){
var AddNewsView = Backbone.View.extend({
    template: _.template($('#AddNewsTemplate').html()),

    events: {
      'submit form' : 'submitFormHandler',
      'change #author' : 'authorChangeHandler',
      'change #headline' : 'headlineChangeHandler',
      'change #newsContent' : 'newsContentChangeHandler'     
    },


    render: function() {
      this.model = new NewsModel();
      var $el = $(this.el);
      var html = this.template();
      $el.html(html);
      return this;
    },

    submitFormHandler: function(e) {
      e.preventDefault();
      this.collection.add(this.model);      
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
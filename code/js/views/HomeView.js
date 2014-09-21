define([
  'jquery',
  'underscore',
  'backbone',
  'views/NewsListView',
  'views/AddNewsView',
  'models/NewsModel',
  'collections/NewsCollection',

], function($, _, Backbone, NewsListView, AddNewsView, NewsModel, NewsCollection){
  var HomeView = Backbone.View.extend({
    render: function(){
      // Temporary create dummy NewsCollection
      var newsCollection = new NewsCollection();

      this.newsListView = new NewsListView({
        el: '#newsListView',
        collection: newsCollection
      });
      this.newsListView.render();

      this.addNewsView = new AddNewsView({
        el: $('#addNewsView'),
        collection: newsCollection
      });
      this.addNewsView.render();
    }
  });

  return HomeView;
});
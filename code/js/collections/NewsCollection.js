define([
  'underscore',
  'backbone',
  // Pull in the Model module from above
  'models/NewsModel'
], function(_, Backbone, NewsModel){
  var NewsCollection = Backbone.Collection.extend({
    model: NewsModel
  });
  // You don't usually return a collection instantiated
  return NewsCollection;
});
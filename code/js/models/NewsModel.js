define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var NewsModel = Backbone.Model.extend({
    defaults: {
    }
  });
  // Return the model for the module
  return NewsModel;
});
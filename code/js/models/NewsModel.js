define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var NewsModel = Backbone.Model.extend({
  	url: "http://localhost/model",

  	defaults: {

  	},

  	initialize: function() {

  	}

  });
  // Return the model for the module
  return NewsModel;
});
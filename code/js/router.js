define([
  'jquery',
  'underscore',
  'backbone',
  'views/HomeView',
], function($, _, Backbone, HomeView){
  var AppRouter = Backbone.Router.extend({
        routes: {
            '#about' : 'about',
            // Define some URL routes
            '': 'index'
        }
  });

    var initialize = function () {
        var app_router = new AppRouter();

        app_router.on("route:about", function () {
          console.log("about");

        });

        app_router.on("route:index", function () {
            var homeView = new HomeView();
            homeView.render();

        });

        Backbone.history.start();

        return app_router;
    };

  return {
    initialize: initialize
  };
});
var NewsModel = Backbone.Model.extend({
    url: "http://localhost/model",

    validate: function(attrs, options) {
        if (!attrs.title) {
          return "Empty title not allowed";
        }
    }

});


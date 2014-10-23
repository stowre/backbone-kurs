  var BookModel = Backbone.Model.extend({
    idAttribute: 'id',
    
    urlRoot: function() {
        return "/api/books/";
    },
      
    initialize: function() {
        console.log("Hello, my CID is " +this.cid + " and my ID is " +  this.id);
    },
      
    updateAuthor: function(name) {
        this.set("author", name);
    }
      
  });
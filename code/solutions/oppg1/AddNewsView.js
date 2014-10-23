var AddNewsView = Backbone.View.extend({
    template: _.template($('#AddNewsTemplate').html()),

    events: {
      'submit form' : 'submitFormHandler',
      'change #author' : 'authorChangeHandler',
      'change #title' : 'titleChangeHandler',
      'change #newsContent' : 'newsContentChangeHandler'     
    },
    
    initialize: function() {
        this.model = new NewsModel();
        this.render();
    },
    
    render: function() {
        var $el = $(this.el);
        var html = this.template();
        $el.html(html);
        return this;
    },

    authorChangeHandler: function(e) {
        this.model.set("author", $(e.currentTarget).val());
    },

    titleChangeHandler: function(e) {
        this.model.set("title", $(e.currentTarget).val());
    },

    newsContentChangeHandler: function(e) {
      this.model.set("content", $(e.currentTarget).val());
    },
        
    submitFormHandler: function(e) {
        e.preventDefault();
        console.log(this.model.toJSON());
        this.resetForm();
    },
        
    resetForm: function() {
        this.model = new NewsModel();
        this.render();
    }
    
  });
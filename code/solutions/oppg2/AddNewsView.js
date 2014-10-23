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
        this.model = new NewsModel();
        var $el = $(this.el);
        var html = this.template();
        $el.html(html);
        return this;
    },

    submitFormHandler: function(e) {
        e.preventDefault();
        this.collection.add(this.model);
        this.resetForm();
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
    
    resetForm: function() {
        this.model = new NewsModel();
        this.render();
    }
    
  });
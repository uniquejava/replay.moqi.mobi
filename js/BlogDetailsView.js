define(['jquery',
        'underscore',
        'backbone',
        'mustache',
        'text!templates/blog_details.html',
        'json!../configure.json',
    ],
    function ($, _, Backbone, Mustache, blogDetailsTemplate, config) {

        var BlogDetailsView = Backbone.View.extend({
            el: $('#content'),

            initialize: function(){
                this.listenTo(this.model, 'change', this.render, this);
            },

            render: function () {
                var html = Mustache.to_html(blogDetailsTemplate, this.model.toJSON());
                this.$el.html(html);
            }
        });
        return BlogDetailsView;

    });
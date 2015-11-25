define(['jquery',
        'underscore',
        'backbone',
        'mustache',
        'text!../index.html',
        'json!../configure.json',
    ],
    function ($, _, Backbone, Mustache, indexTemplate, config) {
        var BlogDetailsView = Backbone.View.extend({
            el: $('head'),
            initialize: function () {

            },

            getBlog: function(slug) {
                console.log(slug);
            },

            render: function () {

                var html = Mustache.to_html(indexTemplate, config['seoinfo']);
                this.$el.html(html)

            }
        });
        return BlogDetailsView;

    });
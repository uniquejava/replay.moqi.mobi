define(['jquery',
        'underscore',
        'backbone',
        'mustache',
        'text!../index.html',
        'json!../configure.json',
        '../js/BlogPostView',
        '../js/ProductsView',
    ],
    function ($, _, Backbone, Mustache, indexTemplate, config, BlogPostView, ProductsView) {
        var HomeView = Backbone.View.extend({
            el: $('head'),

            render: function () {
                var blogPostView = new BlogPostView();
                blogPostView.render();

                var productsView = new ProductsView();
                productsView.render();

                var html = Mustache.to_html(indexTemplate, config['seoinfo']);
                this.$el.html(html)

            }
        });
        return HomeView;

    });
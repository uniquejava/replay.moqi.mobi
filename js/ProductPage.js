define(['jquery',
        'underscore',
        'backbone',
        'mustache',
        'text!../index.html',
        'json!../configure.json',
        '../js/BlogPostView',
        '../js/ProductsView',
        '../js/FooterView',
    ],
    function ($, _, Backbone, Mustache, indexTemplate, config, BlogPostView, ProductsView, FooterView) {
        var ProductPage = Backbone.View.extend({
            el: $('head'),
            initialize: function(){

            },

            render: function () {

                var productsView = new ProductsView();
                productsView.render();

                var footerView = new FooterView();
                footerView.render();

                var html = Mustache.to_html(indexTemplate, config['seoinfo']);
                this.$el.html(html)

            }
        });
        return ProductPage;

    });
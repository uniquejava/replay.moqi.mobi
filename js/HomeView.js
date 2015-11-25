define(['jquery',
        'underscore',
        'backbone',
        'mustache',
        '../js/BlogPostView',
        '../js/ProductsView',
    ],
    function ($, _, Backbone, Mustache, BlogPostView, ProductsView) {
        var HomeView = Backbone.View.extend({
            render: function () {
                var blogPostView = new BlogPostView();
                blogPostView.render();

                var productsView = new ProductsView();
                productsView.render();

            }
        });
        return HomeView;

    });
define(['jquery',
        'underscore',
        'backbone',
        'mustache',
        '../js/BlogPostView',
        'json!../configure.json',
        'text!templates/product.html'
    ],
    function ($, _, Backbone, Mustache, BlogPostView, config, productsTemplate) {
        var HomeView = Backbone.View.extend({
            render: function () {
                var blogPostView = new BlogPostView();
                blogPostView.render();

                $('#products').html(Mustache.to_html(productsTemplate, config["product"]));

            }
        });
        return HomeView;

    });
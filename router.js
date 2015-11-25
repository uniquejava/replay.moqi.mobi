define([
    'jquery',
    'underscore',
    'backbone',
    '../js/HomeView',
    '../js/ProductPage',
    '../js/BlogDetailsView'

], function ($, _, Backbone, HomeView, ProductPage, BlogDetailsView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            'index': 'homePage',
            'product': 'productPage',
            'blog/:slug': 'blog',
            '*actions': 'catchAll'
        },

        blog: function(slug) {
            console.log('slug=', slug);
        }
    });

    var initialize = function () {
        var appRouter = new AppRouter();
        appRouter.on('route:homePage', function () {
            console.log('route:homePage');

            var homeView = new HomeView();
            homeView.render();
        });

        appRouter.on('route:productPage', function () {
            console.log('route:productPage');

            var productPage = new ProductPage();
            productPage.render();
        });

        appRouter.on('route:blog', function (slug) {
            console.log('route:blog');

            var blogDetailsView = new BlogDetailsView();
            blogDetailsView.getBlog(slug);
            blogDetailsView.render();

        });

        appRouter.on('route:catchAll', function () {
            console.log('route:catchAll ');

            var homeView = new HomeView();
            homeView.render();
        });

        Backbone.history.start();

    };

    return {
        initialize: initialize
    };

});





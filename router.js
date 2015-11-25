define([
    'jquery',
    'underscore',
    'backbone',
    '../js/HomeView'
], function ($, _, Backbone, HomeView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            'index': 'homePage',
            '*actions': 'homePage'
        }
    });

    var initialize = function () {
        var appRouter = new AppRouter();
        appRouter.on('route:homePage', function () {
            var homeView = new HomeView();
            homeView.render();
        });

        Backbone.history.start();

    };

    return {
        initialize: initialize
    };

});





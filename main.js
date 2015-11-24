require.config({
    baseUrl: 'lib/',
    paths: {
        jquery: 'jquery-2.1.4',
        underscore: 'underscore-1.8.3',
        mustache: 'mustache-2.2.0',
        templates: '../templates'
    },
    shim: {
        // nothing
    }
});

require(['../js/app'], function(App) {
    App.initialize();
})
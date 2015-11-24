require.config({
    baseUrl: 'lib/',
    paths: {
        jquery: 'jquery-2.1.4',
        underscore: 'underscore-1.8.3'
    },
    shim: {
        // nothing
    }
});

require(['../js/app'], function(App) {
    App.initialize();
})
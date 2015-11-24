define(['jquery','underscore'], function ($, _) {
    var initialize = function () {
        console.log('hello, $ is ', $.fn.jquery);
        console.log('hello, _ is ', _.VERSION);
    };

    return {
        initialize: initialize
    }
});
define(['jquery','underscore', 'mustache'], function ($, _, Mustache) {
    var initialize = function () {
        console.log('hello, $ is ', $.fn.jquery);
        console.log('hello, _ is ', _.VERSION);

        var person = {
            firstName: 'Cyper',
            lastName: 'Yin',
            blogURL: 'http://cyper.me'
        };

        var template = "<h1>{{firstName}} {{lastName}}</h1>Blog: {{blogURL}}";
        var html = Mustache.to_html(template, person);
        $("#sampleArea").html(html);

    };

    return {
        initialize: initialize
    }
});
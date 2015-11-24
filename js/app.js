define(['jquery','underscore', 'mustache', 'text!templates/nav.html'], function ($, _, Mustache, navTemplate) {
    var initialize = function () {
        console.log('hello, $ is ', $.fn.jquery);
        console.log('hello, _ is ', _.VERSION);
        console.log("nav:", navTemplate);

        var info = {
            firstName: 'Cyper',
            lastName: 'Yin',
            blogURL: 'http://cyper.me',
            run: "python -m SimpleHTTPServer 8000"
        };

        var template = navTemplate;
        var html = Mustache.to_html(template, info);
        $("#sampleArea").html(html);

    };

    return {
        initialize: initialize
    }
});
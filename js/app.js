define(['jquery','underscore', 'mustache', 'text!templates/nav.html'], function ($, _, Mustache, navTemplate) {
    var initialize = function () {
        console.log('hello, $ is ', $.fn.jquery);
        console.log('hello, _ is ', _.VERSION);
        console.log("nav:", navTemplate);

        var info = {
            firstName: 'Cyper',
            lastName: 'Yin',
            blogURL: 'http://cyper.me',
            run: "python -m SimpleHTTPServer 8000",
            title: "This is a blog test",
            description: "Is there a way to take the JSON from a $.getJSON() call and assign it",
            slug: 'http://www.cyper.me',
            keywords: "python -m SimpleHTTPServer 8000",
            created: "2015-11-25"

        };

        var blog_posts = [];
        var title = [];
        var description = [];
        var slug = [];
        var keywords = [];
        var created = [];

        /*
        $.getJSON("url", {}, function(data) {
            $.each(data, function (key,val) {
                title.push(val['title']);
                description.push(val['description']);
                slug.push(val['slug']);
                keywords.push(val[keywords]);
                created.push(val['created']);
            });
        })*/

        var template = navTemplate;
        var html = Mustache.to_html(template, info);
        $("#sampleArea").html(html);

    };

    return {
        initialize: initialize
    }
});
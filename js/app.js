define(['jquery', 'underscore', 'mustache', 'text!templates/nav.html', 'json!http://localhost:3000/blogs'],
    function ($, _, Mustache, navTemplate, blogPosts) {
    var initialize = function () {
        console.log('hello, $ is ', $.fn.jquery);
        console.log('hello, _ is ', _.VERSION);
        console.log("nav:", navTemplate);

        console.log(blogPosts);

        var info = [];
        $.each(blogPosts, function (key, val) {
            var blog = {};
            blog.title = val['title'];
            blog.description = val['description'];
            blog.slug = val['slug'];
            blog.keywords = val['keywords'];
            blog.created = val['created'];
            info.push(blog);
        });

        console.log(info);

        var template = navTemplate;
        var html = Mustache.to_html(template, info);
        $("#blogArea").html(html);

    };

    return {
        initialize: initialize
    }
});
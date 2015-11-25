define(['jquery', 'underscore', 'mustache', 'text!templates/nav.html', 'json!http://localhost:3000/blogs','text!../index.html'],
    function ($, _, Mustache, navTemplate, blogPosts, indexTemplate) {
    var initialize = function () {
        this.template = navTemplate;
        this.indexTemplate = indexTemplate;

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

        var html = Mustache.to_html(this.template, info);
        $("#blogArea").html(html);

        var seoinfo = {
            description: "墨颀移动 CMS移动平台的CMS解决方案",
            keywords: "移动CMS,移动CMS框架,移动平台CMS,移动CMS系统",
            title: "墨颀 CMS - 移动平台的CMS解决方案"
        };

        var head = Mustache.to_html(this.indexTemplate, seoinfo);
        console.log(head);

        $('head').html(head);

    };

    return {
        initialize: initialize
    }
});
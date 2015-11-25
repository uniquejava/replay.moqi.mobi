define(['jquery',
        'underscore',
        'mustache',
        'text!templates/blog_posts.html',
        'text!../index.html',
        'json!http://localhost:3000/blogs',
        'json!../configure.json',
        'text!templates/product.html'
    ],
    function ($, _, Mustache, blogsTemplate, indexTemplate, blogPosts, configure, productsTemplate) {
        var initialize = function () {
            this.blogsTemplate = blogsTemplate;
            this.indexTemplate = indexTemplate;
            this.productsTemplate = productsTemplate;
            this.config = configure;

            var blogs = [];
            $.each(blogPosts, function (key, val) {
                var blog = {};
                blog.title = val['title'];
                blog.description = val['description'];
                blog.slug = val['slug'];
                blog.keywords = val['keywords'];
                blog.created = val['created'];
                blogs.push(blog);
            });

            $('#products').html(Mustache.to_html(this.productsTemplate, this.config["product"]));

            var partials = {"products": "mo"};
            $("#blogArea").html(Mustache.to_html(this.blogsTemplate, blogs, partials));
            $('head').html(Mustache.to_html(this.indexTemplate, this.config["seoinfo"]));

        };

        return {
            initialize: initialize
        }
    }
)
;
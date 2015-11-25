define(['jquery',
        'underscore',
        'backbone',
        'mustache',
        'text!templates/blog_posts.html',
        'json!http://localhost:3000/blogs'
    ],
    function ($, _, Backbone, Mustache, blogsTemplate, blogPosts) {
        var BlogPostView = Backbone.View.extend({
            el: $("#content"),

            render: function () {
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

                this.$el.html(Mustache.to_html(blogsTemplate, blogs));

            }
        });
        return BlogPostView;

    });
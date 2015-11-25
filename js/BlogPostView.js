define(['jquery',
        'underscore',
        'backbone',
        'mustache',
        'text!templates/blog_posts_lists.html',
        'json!http://localhost:3000/blogs'
    ],
    function ($, _, Backbone, Mustache, blogsTemplate, blogPosts) {
        var BlogPostView = Backbone.View.extend({
            el: $("#content"),

            render: function () {
                var blogs = [];

                var parseDate = function(dateTime){
                    var date = new Date(dateTime);
                    return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日';
                };

                $.each(blogPosts, function (key, val) {
                    var blog = {};
                    blog.title = val['title'];
                    blog.description = val['description'];
                    blog.slug = val['slug'];
                    blog.keywords = val['keywords'];
                    blog.created = parseDate(val['created']);
                    blogs.push(blog);
                });

                this.$el.html(Mustache.to_html(blogsTemplate, blogs));

            }
        });
        return BlogPostView;

    });
const { Author, View, Post } = require('./connectors');

const resolvers = {
  Query: {
    author: (_, args) => Author.findOne({ id: args.id }),
    allAuthors: (_, args) => Author.findAll(),
    allPosts: (_, args) => Post.findAll(),
    post: (_, args) =>Post.findOne({ id: args.id })
  },
  Author: {
    posts: (author) => author.getPosts()
  },
  Post: {
    author: post => post.getAuthor(),
    views: post => View.findOne({ postId: post.id }).then(view => view.views)
  }
};

module.exports = resolvers;
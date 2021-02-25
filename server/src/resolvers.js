const { Author, View } = require('./connectors');

const resolvers = {
  Query: {
    author(_, args) {
      return Author.findOne({ id: args.id });
    },
    allAuthors(_, args) {
      return Author.findAll();
    }
  },
  Author: {
    posts(author) {
      return author.getPosts();
    }
  },
  Post: {
    author(post) {
      return post.getAuthor();
    },
    views(post) {
      return View.findOne({ postId: post.id }).then(view => view.views);
    }
  }
};

module.exports = resolvers;
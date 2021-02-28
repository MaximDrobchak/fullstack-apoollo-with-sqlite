const { Author, View, Post } = require('./connectors');

const resolvers = {
  Query: {
    author: (_, args) => Author.findOne({ id: args.id }),
    allAuthors: (_, args) => Author.findAll(),
    allPosts: (_, args) => Post.findAll(),
    post: (_, args) => Post.findOne({ id: args.id })
  },
  Author: {
    posts: (author) => author.getPosts()
  },
  Response: {
    success: (response) => response.success,
    error: (response) => response.error,
    messsage: (response) => response.messsage,
  },
  Post: {
    author: post => post.getAuthor()
  },
  Mutation: {
    addPost: async (_, { post }) => {
      try {
        await Post.create(post);
        return { success: true, error: "" };
      } catch (error) {
        return { success: false, error: "Create post filed!", messsage: error.messsage };
      }
    },
    deletePost: async (_, { id }) => {
      try {
        await Post.destroy({ where: { id } });
        return { success: true, error: "" };
      } catch (error) {
        return { success: false, error: "Delete post filed!", messsage: error.messsage };
      }
    },
    updatePost: async (_, { title, text, id }) => {
      try {
        await Post.update({ title, text }, { where: { id } });
        return { success: true, error: "" };
      } catch (error) {
        return { success: false, error: "Update post filed!", messsage: error.messsage };
      }
    },
    addAuthor: async (_, { firstName, lastName, posts }) => {
      try {
        await Author.create({firstName, lastName, posts: posts ? JSON.parse(posts) : [] });
        return { success: true, error: "" };
      } catch (error) {
        return { success: false, error: "Create autrhor filed!", messsage: error.messsage };
      }
    },
    deleteAuthor: async (_, { id }) => {
      try {
        await Author.destroy({ where: { id } });
        return { success: true, error: "" };
      } catch (error) {
        return { success: false, error: "Delete autrhor filed!", messsage: error.messsage };
      }
    },
    updateAuthor: async (_, { firstName, lastName, posts, id }) => {
      try {
        await Author.update({ firstName, lastName, posts: posts ? JSON.parse(posts) : [] }, { where: { id } });
        return { success: true, error: "" };
      } catch (error) {
        return { success: false, error: "Update autrhor filed!", messsage: error.messsage };
      }
    }
  }
};

module.exports = resolvers;
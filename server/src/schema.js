const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
  type Query {
    author(id: ID!): Author
    post(id: ID!): Post
    allAuthors: [Author]
    allPosts: [Post]
  }

  type Author {
    id: ID!
    firstName: String
    lastName: String
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String
    text: String
    views: Int
    author: Author
  }

  type Response {
    success: Boolean!
    error: String!
    messsage: String
  }

  type Mutation {
    addPost(
      id: ID!
      title: String
      text: String
      views: Int
      ): Response

    deletePost(id: ID): Response

    updatePost(
      id: ID!
      title: String
      text: String
      views: Int
    ): Response

    addAuthor(
      id: ID!
      firstName: String!
      lastName: String!
      posts: String
    ): Response

    deleteAuthor(id: ID): Response

    updateAuthor(
      id: ID!
      firstName: String
      lastName: String
      posts: String
    ): Response
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;

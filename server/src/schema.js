const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `
type Query {
  author(id: ID!): Author
  allAuthors: [Author]
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
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
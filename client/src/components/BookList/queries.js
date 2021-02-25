import { gql } from '@apollo/client';

export const GET_AUTHORS = gql`
  query GetAuthor {
    allAuthors {
        id
        firstName
        lastName
        posts {
          id
          title
          text
        }
      }
   }
`;

export const GET_AUTHOR = gql`
  query Author($id: ID!) {
    author(id: $id) {
      id
      lastName
      firstName
      posts {
          id
          title
          text
      }
    }
  }
`;
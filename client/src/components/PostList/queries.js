import { gql } from '@apollo/client';

export const GET_ALL_POSTS = gql`
  query AllPosts {
    allPosts {
      id
      views
      title
      text
      author {
      id
      firstName
      lastName
      }
    }
   }
`;

// export const GET_AUTHOR = gql`
//   query Author($id: ID!) {
//     author(id: $id) {
//       id
//       lastName
//       firstName
//       posts {
//           id
//           title
//           text
//       }
//     }
//   }
// `;
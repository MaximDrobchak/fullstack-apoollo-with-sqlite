import React from "react";
import { useQuery } from '@apollo/client';
import { GET_AUTHORS } from './queries';

const BookList = () => {
   const { loading, data } = useQuery(GET_AUTHORS);

  if (loading || !data) return <h3>Loading...</h3>;
  console.log(data)
  return (
    <div>
      <h3>List Books</h3>
      <div>{(data.allAuthors || []).map(({ firstName, lastName, posts, id }) => (
        <div key={`${firstName}-${id}`}>
          <span>firstName: <span>{firstName}</span> lastName: <span>{lastName}</span></span>
          {(posts || []).map(({id, title, text}) => (
            <div key={id}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      ))}</div>
    </div>
  );
};

export default BookList;

import React from "react";
import { useQuery } from '@apollo/client';
import { GET_AUTHOR} from './queries';
import { NetworkStatus } from '@apollo/client';

const Author = () => {
   const { loading, data, refetch, networkStatus} = useQuery(GET_AUTHOR, {
     variables: { id: 1 },
       notifyOnNetworkStatusChange: true,
   });
   console.log(data)
   if (networkStatus === NetworkStatus.refetch) return <h3>Refetching.</h3>;
  if (loading || !data) return <h3>Loading...</h3>;

  return (
    <div>
       <button onClick={() => refetch()}>Refetch!</button>
      <div style={{display: 'flex', justifyContent: 'space-between', maxWidth: 150}}>
        <h4>{data.author.firstName}</h4>  <h4>{data.author.lastName}</h4>
      </div>
      {(data.author.posts || []).map(({title, text,id}, index) => (
          <div key={id + index}>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
      ))}
    </div>

  );
};

export default Author;

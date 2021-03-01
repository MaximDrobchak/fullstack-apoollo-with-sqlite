import React from "react";
import { useQuery } from '@apollo/client';
import { GET_ALL_POSTS } from './queries';
import Loading from '../Loading';
import { List, PostListContainer} from './styles';
import Post from '../Post';

const PostList = () => {
  const { loading, data } = useQuery(GET_ALL_POSTS);

  return (
    <PostListContainer>
      {loading || !data ? <Loading /> : (
            <List>
              {(data.allPosts || []).map((post, index) => (
                <div key={`${index}-${index + post.id}`}>
                  <Post {...post}/>
                </div>
              ))}
            </List>
      )}
    </PostListContainer>
  );
};

export default PostList;

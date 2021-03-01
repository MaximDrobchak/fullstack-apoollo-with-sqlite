import styled from 'styled-components';

export const List = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const PostListContainer = styled.div`
  width: 80vw;
  height: 80vh;
  border-radius: 50px 50px;
  border: 0.5px solid lightgrey;
  overflow-x: hidden;
  overflow-y: auto;
  left: 10vw;
  position: relative;
  padding: 35px;
  margin-top: 50px;
`;

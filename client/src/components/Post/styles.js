import styled from 'styled-components';

export const List = styled.div`
  width: 80%;
  height: 100;
  display: flex;
  flex-wrap: wrap;
  border-radius: 15px;
  border:0.5px solid lightgrey;
`;


export const TitlePost = styled.div`
  font-size: 18px;
  font-family: Roboto, sans-serif;
  color: grey;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const DescriptionPost = styled.div`
  font-size: 14px;
  font-family: Roboto, sans-serif;
  color: grey;
  font-weight: 300;
`;

export const AuthorName = styled.div`
  font-size: 12px;
  text-wrap: nowrap;
  font-family: Roboto, sans-serif;
  color: black;
  font-weight: 500;
  position: absolute;
  bottom: 10px;
`;
export const CardPost = styled.div`
  width: 300px;
  height: 150px;
  display: flex;
  position: relative;
  border-radius: 5px;
  border: 0.5px solid lightgrey;
  padding: 5px;
  flex-direction: column;
  margin: 10px;
`;